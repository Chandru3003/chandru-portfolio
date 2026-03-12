"use client"

import { useEffect, useState } from "react"

interface TerminalLine {
  type: "command" | "output"
  text: string
  color?: string
}

const terminalSequence: TerminalLine[] = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "chandrasekar_vasan", color: "#00ff9d" },
  { type: "command", text: "$ cat roles.txt" },
  { type: "output", text: "→ Full Stack Developer", color: "#00ff9d" },
  { type: "output", text: "→ Site Reliability Engineer", color: "#00c8ff" },
  { type: "output", text: "→ System Administrator", color: "#ff6b35" },
  { type: "command", text: "$ docker ps" },
  { type: "output", text: "CONTAINER      STATUS" },
  { type: "output", text: "logtrace       UP ✓", color: "#00ff9d" },
  { type: "output", text: "queryforge     UP ✓", color: "#00c8ff" },
  { type: "output", text: "cloudcache     UP ✓", color: "#ff6b35" },
  { type: "command", text: "$ uptime" },
  { type: "output", text: "200+ users · 60+ machines", color: "#00ff9d" },
]

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < terminalSequence.length) {
      const delay = terminalSequence[currentIndex].type === "command" ? 800 : 200
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, terminalSequence[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="bg-[#0f1923] border border-[#1a2d40] rounded-lg overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1218] border-b border-[#1a2d40]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-[#4a6580]">terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm h-[320px] overflow-auto">
        {visibleLines.map((line, index) => (
          <div
            key={index}
            className={`${line.type === "command" ? "mt-2" : ""} leading-relaxed`}
            style={{ color: line.color || "#c9d8e8" }}
          >
            {line.text}
          </div>
        ))}
        {currentIndex >= terminalSequence.length && (
          <div className="mt-2 flex items-center">
            <span className="text-[#c9d8e8]">$ </span>
            <span
              className="inline-block w-2 h-4 bg-[#00ff9d] ml-1"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
