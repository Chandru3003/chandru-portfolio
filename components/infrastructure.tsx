"use client"

import { useEffect, useRef, useState } from "react"

const tools = [
  { code: "LX", label: "Linux Admin", subtitle: "Rocky · Ubuntu · multi-distro", color: "#00ff9d" },
  { code: "DK", label: "Docker", subtitle: "containers · compose · deploy", color: "#00c8ff" },
  { code: "PG", label: "PostgreSQL", subtitle: "Mongo · MySQL · Elastic", color: "#ff6b35" },
  { code: "PM", label: "Prometheus", subtitle: "metrics · alerting · grafana", color: "#a855f7" },
  { code: "SH", label: "Shell Scripting", subtitle: "automation · cron · bash", color: "#00c8ff" },
  { code: "VM", label: "Virtualization", subtitle: "VirtualBox · VMware · KVM", color: "#00ff9d" },
  { code: "RX", label: "React + Node", subtitle: "full-stack · REST APIs", color: "#ff6b35" },
  { code: "PY", label: "Python", subtitle: "Django · Flask · scripting", color: "#a855f7" },
]

export function Infrastructure() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl text-[#c9d8e8] mb-12">
          <span className="text-[#4a6580]">{"// "}</span>
          Infrastructure & Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.code}
              className={`bg-[#0f1923] border border-[#1a2d40] rounded-lg p-4 transition-all duration-500 hover:border-[${tool.color}]/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center font-mono text-sm font-bold mb-3"
                style={{
                  backgroundColor: `${tool.color}15`,
                  color: tool.color,
                }}
              >
                {tool.code}
              </div>
              <h3 className="font-mono text-sm text-[#c9d8e8] mb-1">{tool.label}</h3>
              <p className="text-xs text-[#4a6580]">{tool.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
