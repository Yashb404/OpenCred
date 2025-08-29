import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">FinScore</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/pages/landing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/app/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
            <Link href="/pages/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/app/dashboard">Get Started</Link>
            </Button>
            <Button asChild>
              <Link href="/app/dashboard">Check Score</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Alternative Credit Scoring
            <span className="block text-blue-600">for the Underbanked</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Generate fair credit scores using your digital transaction history. 
            No traditional credit history required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/app/dashboard">Check Your Score Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pages/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Data Access</h3>
            <p className="text-gray-600">Connect your bank accounts securely through India's Account Aggregator framework</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scoring</h3>
            <p className="text-gray-600">AI-powered analysis of your financial behavior and transaction patterns</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Inclusion</h3>
            <p className="text-gray-600">Break barriers and access financial products with your alternative credit score</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 FinScore. Empowering financial inclusion through alternative credit scoring.</p>
        </div>
      </footer>
    </div>
  );
}
