🪙 OpenCred
A modern credit scoring platform designed for the new-age workforce.

The Problem
Traditional credit scoring systems are outdated. They rely heavily on formal loan and credit card histories, often excluding students, freelancers, gig workers, and recent graduates. This financial exclusion creates significant barriers, preventing millions of deserving individuals from accessing essential financial services like small loans, credit cards, and other opportunities for growth.

Our Solution
OpenCred is an alternative credit scoring platform that provides a more equitable and accurate assessment of financial health. Instead of relying on traditional credit histories, our model analyzes spending patterns, income stability, and financial discipline derived from everyday transaction data.

This approach offers a holistic view of an individual's financial responsibility, empowering lenders to make fairer risk assessments and opening doors for the underbanked.

A Note on Data Simulation
For this hackathon MVP, we are using a sophisticated set of simulated bank transaction data. This allows us to demonstrate the power and accuracy of our credit scoring model without navigating the significant regulatory complexities associated with aggregating live financial data, which typically requires licensing and direct partnerships within the financial ecosystem. Our simulated data realistically mimics the transactional behavior of our target users.

✨ Key Features (MVP)
Secure User Authentication: Simple and secure sign-up and login functionality.

Dynamic Credit Scoring: A proprietary algorithm that processes transactional data to generate an alternative credit score.

Insightful Dashboard: A clean, user-friendly interface to display the calculated credit score.

Score Factor Analysis: Provides users with clear, understandable reasons behind their score, highlighting both positive financial habits and areas for improvement.

Income vs. Expense Visualization: A simple chart to help users understand their cash flow at a glance.

🛠️ Tech Stack
Our platform is built with a modern, scalable tech stack:

Frontend: Next.js (React) with TypeScript & Tailwind CSS

Backend: Python with FastAPI

Database: MongoDB

UI Components: shadcn/ui

🚀 Getting Started
Prerequisites
Node.js and npm/yarn/pnpm

Python 3.8+ and pip

MongoDB instance (local or cloud)

1. Clone the repository
Bash

git clone https://github.com/your-username/opencred.git
cd opencred
2. Frontend Setup (Next.js)
Bash

cd frontend
npm install
npm run dev
Your Next.js app will be available at http://localhost:3000.

3. Backend Setup (FastAPI)
Bash

cd backend
pip install -r requirements.txt
# Create a .env file and add your MONGO_URI

uvicorn main:app --reload
Your FastAPI server will be running on http://localhost:8000.

🔮 Future Prospects
This MVP is just the beginning. We envision OpenCred evolving into a comprehensive financial wellness platform with features like:

Micro-Loan Eligibility: Partnering with financial institutions to offer pre-approved micro-loans based on the OpenCred score.

Gamified Financial Discipline: Introducing rewards, badges, and challenges to encourage positive financial habits.

Expanded Data Sources: Incorporating other forms of alternative data (with user consent) to further enrich the credit score.

Personalized Financial Insights: Offering automated, actionable advice to help users improve their financial health over time.
