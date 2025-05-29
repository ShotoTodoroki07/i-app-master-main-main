import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" width={150} height={100} alt="Logo" />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/upload" className="hover:text-blue-700 transition">Upload</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact Us</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          
          <Link
            href="/get-started"
            className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header
