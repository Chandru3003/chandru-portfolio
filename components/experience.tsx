"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "Aug 2025 – Present",
    company: "UTA",
    color: "#00ff9d",
    role: "Graduate Research Assistant – System Admin",
    description:
      "Deployed and hardened 60+ lab machines across Linux/Windows for 200+ users. Manages InfoSec Lab on Rocky Linux 9 + VirtualBox. Automated workflows via shell scripting.",
    chips: ["Rocky Linux", "VirtualBox", "Bash scripting", "security hardening"],
  },
  {
    period: "Jan – Apr 2024",
    company: "eNoah iSolution",
    color: "#00c8ff",
    role: "Software Engineer Intern",
    description:
      "Built React.js CRM frontend with PostgreSQL/MongoDB backends. Containerized full deployment pipeline with Docker. ~25% efficiency gain in loan processing.",
    chips: ["React.js", "PostgreSQL", "Docker", "MongoDB"],
  },
  {
    period: "Aug – Sep 2023",
    company: "Kun Auto Co Pvt Ltd",
    color: "#ff6b35",
    role: "Software Engineer Intern",
    description:
      "Full-stack automobile price estimator in Node.js + React + PostgreSQL. Regression-based prediction with ~15% stability improvement via hyperparameter tuning.",
    chips: ["Node.js", "React", "PostgreSQL", "Python"],
  },
]

export function Experience() {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a18]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl text-[#c9d8e8] mb-12">
          <span className="text-[#4a6580]">{"// "}</span>
          Experience
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-[#1a2d40] last:border-0 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Left - Period */}
              <div className="font-mono text-sm text-[#4a6580]">{exp.period}</div>

              {/* Right - Details */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono font-bold" style={{ color: exp.color }}>
                    {exp.company}
                  </span>
                  <span className="text-[#4a6580]">·</span>
                  <span className="text-[#c9d8e8]">{exp.role}</span>
                </div>
                <p className="text-sm text-[#4a6580] leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.chips.map((chip) => (
                    <span
                      key={chip}
                      className="skill-chip px-2 py-1 bg-[#1a2d40] text-[#c9d8e8] font-mono text-xs rounded"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
