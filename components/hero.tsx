"use client"

import { useEffect, useState } from "react"
import { Terminal } from "./terminal"
import { Github, Linkedin, FileText } from "lucide-react"

export function Hero() {
  const [displayedName, setDisplayedName] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullName = "Chandrasekar Vasan"

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Role Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 font-mono text-xs bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 rounded-full">
                full-stack dev
              </span>
              <span className="px-3 py-1 font-mono text-xs bg-[#00c8ff]/10 text-[#00c8ff] border border-[#00c8ff]/30 rounded-full">
                SRE
              </span>
              <span className="px-3 py-1 font-mono text-xs bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/30 rounded-full">
                sys admin
              </span>
            </div>

            {/* Name with Typewriter */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-[#c9d8e8]">
              {displayedName}
              <span
                className="inline-block w-3 h-10 sm:h-12 lg:h-14 bg-[#00ff9d] ml-1 align-middle"
                style={{ opacity: showCursor ? 1 : 0 }}
              />
            </h1>

            {/* Handle & Location */}
            <p className="font-mono text-[#4a6580]">
              @Chandru3003 · Arlington, TX
            </p>

            {/* Bio */}
            <p className="text-lg leading-relaxed text-[#c9d8e8] max-w-lg">
              I build systems that scale, ship code that lasts, and keep infrastructure that never sleeps. 
              <span className="text-[#00c8ff]"> MS CS @ UTA</span> — where software engineering meets the metal.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff9d] text-[#050510] font-mono text-sm font-bold rounded-md hover:bg-[#00ff9d]/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                ./resume.pdf
              </a>
              <a
                href="https://github.com/Chandru3003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a2d40] text-[#c9d8e8] font-mono text-sm rounded-md hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
              >
                <Github className="w-4 h-4" />
                github
              </a>
              <a
                href="https://www.linkedin.com/in/chandrasekarvasan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a2d40] text-[#c9d8e8] font-mono text-sm rounded-md hover:border-[#00c8ff] hover:text-[#00c8ff] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin
              </a>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="lg:pl-8">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
