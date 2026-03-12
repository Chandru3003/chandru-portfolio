"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "Python", level: 92, color: "#00ff9d" },
  { name: "Linux / Bash", level: 90, color: "#00c8ff" },
  { name: "Docker", level: 88, color: "#00c8ff" },
  { name: "PostgreSQL", level: 85, color: "#ff6b35" },
  { name: "React.js", level: 83, color: "#00ff9d" },
  { name: "Node.js", level: 78, color: "#a855f7" },
]

const education = [
  {
    degree: "MS Computer Science",
    school: "University of Texas at Arlington",
    period: "Jan 2025 – Dec 2026",
    gpa: "GPA 3.83/4.00",
  },
  {
    degree: "B.Tech Information Technology",
    school: "Anna University (SVCE)",
    period: "Aug 2020 – Jun 2024",
    gpa: "GPA 4.00/4.00",
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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
          Proficiency & Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="font-mono text-lg text-[#4a6580] mb-6">skill_metrics</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-[#c9d8e8]">{skill.name}</span>
                  <span style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1a2d40] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="font-mono text-lg text-[#4a6580] mb-6">education_log</h3>
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`bg-[#0f1923] border border-[#1a2d40] rounded-lg p-5 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h4 className="font-mono text-[#00ff9d] text-sm mb-1">{edu.degree}</h4>
                <p className="text-[#c9d8e8] mb-2">{edu.school}</p>
                <div className="flex flex-wrap gap-4 text-xs text-[#4a6580] font-mono">
                  <span>{edu.period}</span>
                  <span className="text-[#00c8ff]">{edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
