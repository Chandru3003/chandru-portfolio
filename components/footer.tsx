import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#1a2d40]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-[#4a6580]">
            © 2025 chandrasekar vasan ·{" "}
            <a
              href="mailto:chandrasekarvasan2002@gmail.com"
              className="text-[#c9d8e8] hover:text-[#00ff9d] transition-colors"
            >
              chandrasekarvasan2002@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Chandru3003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a6580] hover:text-[#00ff9d] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/chandrasekarvasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a6580] hover:text-[#00ff9d] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
