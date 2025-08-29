import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/lib/db' 
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  const eventType = evt.type;

  console.log(` Webhook received: ${eventType}`);

  try {
    if (eventType === 'user.created') {
      await db.user.create({
        data: {
          id: evt.data.id,
          email_address: evt.data.email_addresses[0].email_address,
          first_name: evt.data.first_name!,
          last_name: evt.data.last_name!,
        }
      });
      return NextResponse.json({ message: 'User created' }, { status: 201 });
    }

    if (eventType === 'user.updated') {
      await db.user.update({
        where: {
          id: evt.data.id
        },
        data: {
          email_address: evt.data.email_addresses[0].email_address,
          first_name: evt.data.first_name!,
          last_name: evt.data.last_name!,
        }
      });
      return NextResponse.json({ message: 'User updated' }, { status: 200 });
    }

    if (eventType === 'user.deleted') {
      if (evt.data.id) {
        await db.user.delete({
          where: {
            id: evt.data.id
          }
        });
        return NextResponse.json({ message: 'User deleted' }, { status: 200 });
      }
    }
  } catch (error) {
    console.error(`Error handling ${eventType} event:`, error);
    return NextResponse.json({ message: 'Database error' }, { status: 500 });
  }

  return new Response('', { status: 200 })
}
// 