import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
    <Navbar></Navbar>

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
              <Link href="/dashboard">Check Your Score Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
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
            <p className="text-gray-600">Connect your bank accounts securely through India&apos;s Account Aggregator framework</p>
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
