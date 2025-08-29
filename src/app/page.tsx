'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Brain, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  ChevronDown,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useState } from "react";

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-100 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
    
    <div className="relative z-10 container mx-auto px-6 py-20 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-8 shadow-sm">
          <span className="text-slate-700 text-sm font-medium">✨ Made by team Oxymorons</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Alternative Credit Scoring
          <span className="block bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
            for the Underbanked
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Generate fair credit scores using your digital transaction history. 
          No traditional credit history required. Break financial barriers today.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              Check Your Score Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        {/* Social proof */}
        <div className="mt-16 flex items-center justify-center gap-8 text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <span className="text-sm">Trusted by 50,000+ users</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Data Access",
      description: "Connect your bank accounts securely through India's Account Aggregator framework with bank-grade encryption.",
      gradient: "from-slate-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your financial behavior and transaction patterns intelligently.",
      gradient: "from-blue-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Financial Inclusion",
      description: "Break traditional barriers and access financial products with your alternative credit score and unlock opportunities.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose OpenCred?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Experience the future of credit scoring with cutting-edge technology and user-centric design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{feature.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Securely",
      description: "Link your bank accounts through our secure platform using India's Account Aggregator framework."
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our advanced AI analyzes your transaction patterns, spending habits, and financial behavior."
    },
    {
      number: "03",
      title: "Get Your Score",
      description: "Receive your alternative credit score instantly and unlock new financial opportunities."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Get started in just three simple steps and transform your financial future.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-blue-300"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      content: "OpenCred helped me get my first business loan without any traditional credit history. The process was incredibly smooth and transparent.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Freelancer",
      content: "As a freelancer, traditional banks never understood my income pattern. OpenCred's AI-based scoring finally recognized my financial discipline.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Recent Graduate",
      content: "Starting my career, I had no credit history. OpenCred analyzed my transaction patterns and helped me secure a credit card with great terms.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Join thousands of satisfied users who have transformed their financial journey with OpenCred.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                &qout;{testimonial.content}&qout;
              </p>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-slate-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How secure is my financial data?",
      answer: "We use bank-grade encryption and India's Account Aggregator framework to ensure your data is completely secure. We never store your banking credentials and all data is encrypted end-to-end."
    },
    {
      question: "How is my alternative credit score calculated?",
      answer: "Our AI analyzes your transaction patterns, spending habits, income stability, and financial discipline over time to generate a comprehensive credit score that reflects your true creditworthiness."
    },
    {
      question: "Which banks and financial institutions accept OpenCred?",
      answer: "We partner with leading banks, NBFCs, and fintech companies across India. Our growing network includes major institutions that recognize alternative credit scoring for loan approvals."
    },
    {
      question: "How long does it take to get my credit score?",
      answer: "Once you connect your accounts, our AI processes your data and generates your credit score within minutes. You'll receive your score and detailed insights instantly."
    },
    {
      question: "Is there a fee for using OpenCred?",
      answer: "Basic credit score generation is free. We offer premium features and detailed financial insights through our paid plans, designed to provide maximum value for your financial growth."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Get answers to common questions about OpenCred and alternative credit scoring.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300 flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-white rounded-b-xl -mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => (
  <section className="py-24 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 text-white">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-xl text-slate-100 mb-12 leading-relaxed">
          Join thousands of users who have unlocked financial opportunities with OpenCred. 
          Start your journey to financial inclusion today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-slate-600 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white  hover:bg-white text-slate-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
            OpenCred
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Empowering financial inclusion through alternative credit scoring and AI-powered insights.
          </p>
          
        </div>
        

      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 OpenCred. All rights reserved. Empowering financial inclusion through innovation.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}