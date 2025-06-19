'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      const contactSection = document.getElementById('contact-section')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="bg-light shadow-lg fixed w-full z-50 border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 flex-1">
            <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-white p-1">
              <Image
                src="/images/CCC2.jpeg"
                alt="Norwich Christian Centre Logo"
                fill
                className="object-cover rounded-full"
                sizes="48px"
                style={{
                  filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                }}
              />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-wide">Norwich Christian Centre</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-base font-semibold tracking-wide transition-colors duration-200 ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              Home
            </Link>
            <Link href="/about" className={`text-base font-semibold tracking-wide transition-colors duration-200 ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              About
            </Link>
            <Link href="/services" className={`text-base font-semibold tracking-wide transition-colors duration-200 ${isActive('/services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              Services
            </Link>
            <Link href="/contact" className={`text-base font-semibold tracking-wide transition-colors duration-200 ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none transition-colors duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                Home
              </Link>
              <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                About
              </Link>
              <Link href="/services" className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${isActive('/services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                Services
              </Link>
              <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}