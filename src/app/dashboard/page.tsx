import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">FinScore</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Credit Score Dashboard</h1>
          
          {/* Score Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Credit Score</CardTitle>
                <CardDescription>Your current FinScore rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">750</div>
                  <div className="text-sm text-gray-600">Good</div>
                  <Progress value={75} className="mt-4" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
                <CardDescription>Bank account connection status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-8 h-8 bg-green-600 rounded"></div>
                  </div>
                  <div className="text-sm text-gray-600">Connected</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Last Updated</CardTitle>
                <CardDescription>Score refresh date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900 mb-2">Today</div>
                  <div className="text-sm text-gray-600">2 hours ago</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Connect Bank Account</CardTitle>
                <CardDescription>Connect your bank accounts to get your credit score</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  Connect via Account Aggregator
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Refresh Score</CardTitle>
                <CardDescription>Update your credit score with latest data</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" size="lg">
                  Refresh Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Score Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Score Breakdown</CardTitle>
              <CardDescription>Factors influencing your credit score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Income Stability</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={80} className="w-24" />
                    <span className="text-sm text-gray-600">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Payment History</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={90} className="w-24" />
                    <span className="text-sm text-gray-600">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Financial Discipline</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={70} className="w-24" />
                    <span className="text-sm text-gray-600">70%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest transactions and score updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="font-medium">Score Updated</div>
                    <div className="text-sm text-gray-600">Credit score recalculated</div>
                  </div>
                  <div className="text-sm text-gray-600">2 hours ago</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="font-medium">Bank Account Connected</div>
                    <div className="text-sm text-gray-600">HDFC Bank account linked</div>
                  </div>
                  <div className="text-sm text-gray-600">1 day ago</div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="font-medium">Profile Created</div>
                    <div className="text-sm text-gray-600">Account setup completed</div>
                  </div>
                  <div className="text-sm text-gray-600">3 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 FinScore. Empowering financial inclusion through alternative credit scoring.</p>
        </div>
      </footer>
    </div>
  );
}