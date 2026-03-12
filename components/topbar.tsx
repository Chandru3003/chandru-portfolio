"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Topbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/90 backdrop-blur-sm border-b border-[#1a2d40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="font-mono text-[#00ff9d] text-sm sm:text-base">
            chandrasekar_vasan.sh
          </div>

          {/* Desktop Status Pills */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0f1923] border border-[#1a2d40] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse-dot" />
              <span className="font-mono text-xs text-[#c9d8e8]">all systems operational</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0f1923] border border-[#1a2d40] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00c8ff] animate-pulse-dot" />
              <span className="font-mono text-xs text-[#c9d8e8]">open to work</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 text-[#c9d8e8] hover:text-[#00ff9d] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0f1923] border-b border-[#1a2d40] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#050510] border border-[#1a2d40] rounded-lg">
            <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse-dot" />
            <span className="font-mono text-xs text-[#c9d8e8]">all systems operational</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-[#050510] border border-[#1a2d40] rounded-lg">
            <span className="w-2 h-2 rounded-full bg-[#00c8ff] animate-pulse-dot" />
            <span className="font-mono text-xs text-[#c9d8e8]">open to work</span>
          </div>
        </div>
      )}
    </header>
  )
}
