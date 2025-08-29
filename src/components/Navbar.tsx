import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
          <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">FinScore</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
  )
}

export default Navbar
