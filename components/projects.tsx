"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    name: "LogTrace",
    type: "distributed systems",
    color: "#00ff9d",
    description:
      "Centralized log monitoring ingesting ~10K events/min across microservices with Elasticsearch full-text search and ~25% storage reduction via configurable TTL archiving",
    tags: ["Elasticsearch", "React", "Docker", "TTL"],
  },
  {
    name: "QueryForge",
    type: "database engine",
    color: "#00c8ff",
    description:
      "Lightweight SQL engine parsing SELECT/WHERE/JOIN on CSV datasets with ~92% correctness vs SQLite and ~35% faster queries via in-memory indexing",
    tags: ["Python", "PLY parser", "SQL", "indexing"],
  },
  {
    name: "CloudCache",
    type: "infrastructure",
    color: "#ff6b35",
    description:
      "Fault-tolerant Redis-inspired distributed key-value store with Raft consensus, ~5K ops/sec, and Prometheus observability across replicated nodes",
    tags: ["Raft", "Docker", "Prometheus"],
  },
]

export function Projects() {
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
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`project-card bg-[#0f1923] border border-[#1a2d40] rounded-lg p-6 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${
                project.color === "#00ff9d"
                  ? "green"
                  : project.color === "#00c8ff"
                  ? "blue"
                  : "orange"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                borderBottomWidth: "2px",
                borderBottomColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = project.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = "transparent"
              }}
            >
              {/* Type Badge */}
              <span
                className="inline-block px-2 py-1 font-mono text-xs rounded mb-4"
                style={{
                  backgroundColor: `${project.color}15`,
                  color: project.color,
                }}
              >
                {project.type}
              </span>

              {/* Name */}
              <h3 className="font-mono text-xl text-[#c9d8e8] mb-3">{project.name}</h3>

              {/* Description */}
              <p className="text-sm text-[#4a6580] leading-relaxed mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-chip px-2 py-1 bg-[#1a2d40] text-[#c9d8e8] font-mono text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
