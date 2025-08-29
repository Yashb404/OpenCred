import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
            <Link href="/app/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
            <Link href="/pages/about" className="text-blue-600 font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/app/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About FinScore</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              FinScore is revolutionizing credit scoring by leveraging India&apos;s Account Aggregator framework 
              to provide fair and inclusive financial assessment for the underbanked population.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that everyone deserves access to financial products, regardless of their 
              traditional credit history. By analyzing digital transaction patterns, we create 
              alternative credit scores that reflect true financial behavior.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Connect</h3>
                <p className="text-sm text-gray-600">Securely connect your bank accounts through our platform</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analyze</h3>
                <p className="text-sm text-gray-600">Our AI analyzes your transaction patterns and financial behavior</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Score</h3>
                <p className="text-sm text-gray-600">Get your alternative credit score and unlock financial opportunities</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
            <p className="text-gray-600 mb-6">
              Built on India&apos;s secure Account Aggregator framework, our platform ensures data privacy 
              and security while providing comprehensive financial insights. We use advanced machine 
              learning algorithms to analyze spending patterns, income stability, and financial discipline.
            </p>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/app/dashboard">Start Your Journey</Link>
              </Button>
            </div>
          </div>
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
