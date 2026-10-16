"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "Aug 2025 – Present",
    company: "UTA",
    color: "#00ff9d",
    role: "Graduate Research Assistant – System Admin",
    description:
      "Administered 60+ Linux hosts (Ubuntu, Rocky Linux 9), plus Windows and Jamf-managed Macs for 200+ users. Automated configuration and provisioning across 70 workstations with Ansible playbooks validated via GitLab CI, Bash/Python patching, and VirtualBox management, hardening systems with SSH key-only access, firewall rules, fail2ban, and least-privilege sudo. Deployed Prometheus and node_exporter on 100+ machines with Alertmanager to PagerDuty, tuned CPU thresholds to sustained usage, and documented log analysis, recovery procedures, and runbooks. In offline replays across 40 held-out incidents with five runs each, improved diagnostic success from 62% to 84% (+22 pp; 95% CI +12 to +32.5 pp), and used durable tool receipts and idempotency keys to improve interrupted-workflow recovery from 39/40 to 40/40 with zero duplicate remediation requests on failure-injection reruns.",
    chips: ["Ansible", "GitLab CI", "Prometheus", "PagerDuty", "Rocky Linux", "VirtualBox", "fail2ban", "Jamf", "Stateful agents", "idempotency"],
  },
  {
    period: "Jan – Apr 2024",
    company: "eNoah iSolution",
    color: "#00c8ff",
    role: "Software Engineer Intern",
    description:
      "Automated loan processing via React.js components and CRM APIs on PostgreSQL/MongoDB, achieving ~25% efficiency gains, and integrated Dockerized Python APIs. Built loan approval and risk models comparing Logistic Regression and XGBoost, delivering ~12% higher accuracy, and validated CRM/database workflows before release. On 1,000 held-out synthetic applications under assumed 4:1 false-approval/rejection penalties, an isotonic-calibrated XGBoost model reduced expected decision cost by 18% (95% CI 6.9% to 28.4%) versus Logistic Regression. Piloted a stateful CRM assistant with four volunteer reviewers across 80 synthetic cases, reducing median review time from 8 to 6 minutes (25%), with 95% agreement with predefined eligibility-rule references in both conditions.",
    chips: ["React.js", "PostgreSQL", "Docker", "MongoDB", "Python APIs", "Logistic Regression", "XGBoost"],
  },
  {
    period: "Aug – Sep 2023",
    company: "Kun Auto Co Pvt Ltd",
    color: "#ff6b35",
    role: "Software Engineer Intern",
    description:
      "Delivered a Node.js/React.js/PostgreSQL price estimation prototype supporting ~50 daily test scenarios and passing 50 synthetic workflow tests for input validation, Python inference, price retrieval, and persisted reviewer adjustments. Tuned a Python regression model with NumPy/Pandas and hyperparameter optimization, reducing MAE by ~15%. On 200 held-out synthetic profiles generated from depreciation rules and noise, gradient boosting achieved 15% lower MAE than ridge regression (95% paired-bootstrap CI 13.0% to 17.0% reduction). Set up GitHub Actions CI/CD with Docker-based API and database checks, reproducible model-service images, and API endpoints with server-side validation.",
    chips: ["Node.js", "React.js", "PostgreSQL", "Python", "NumPy", "Pandas", "GitHub Actions", "Docker"],
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
