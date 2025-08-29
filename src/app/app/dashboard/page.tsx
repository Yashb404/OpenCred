import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Dashboard() {
  // Mock data - replace with real data later
  const mockScore = 750;
  const mockFactors = [
    { name: "Income Stability", score: 85, impact: "positive" },
    { name: "Payment Regularity", score: 90, impact: "positive" },
    { name: "Savings Pattern", score: 70, impact: "neutral" },
    { name: "Transaction Frequency", score: 65, impact: "neutral" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 750) return "text-green-600";
    if (score >= 650) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 750) return "Excellent";
    if (score >= 650) return "Good";
    if (score >= 550) return "Fair";
    return "Poor";
  };

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
            <Link href="/pages/landing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/app/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/pages/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Profile
            </Button>
            <Button size="sm">
              Connect Bank
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Credit Score Dashboard</h1>
          <p className="text-gray-600">Monitor your alternative credit score and financial health</p>
        </div>

        {/* Score Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Score</CardTitle>
              <CardDescription>Your latest credit score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(mockScore)}`}>
                  {mockScore}
                </div>
                <Badge variant="outline" className="text-sm">
                  {getScoreLabel(mockScore)}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Score Change</CardTitle>
              <CardDescription>From last month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">+25</div>
                <p className="text-sm text-gray-600">Improving</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Sources</CardTitle>
              <CardDescription>Connected accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <p className="text-sm text-gray-600">Bank accounts</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Score Factors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Score Factors</CardTitle>
            <CardDescription>What influences your credit score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockFactors.map((factor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{factor.name}</span>
                      <span className="text-sm text-gray-600">{factor.score}%</span>
                    </div>
                    <Progress value={factor.score} className="h-2" />
                  </div>
                  <Badge 
                    variant={factor.impact === "positive" ? "default" : "secondary"}
                    className="ml-4"
                  >
                    {factor.impact === "positive" ? "Good" : "Neutral"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Connect More Data</CardTitle>
              <CardDescription>Add more financial accounts to improve your score accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/app/connect-bank">Connect Bank Account</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Score History</CardTitle>
              <CardDescription>View your score trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/app/score-history">View History</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              Download Report
            </Button>
            <Button variant="outline" size="sm">
              Share Score
            </Button>
            <Button variant="outline" size="sm">
              Get Recommendations
            </Button>
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
