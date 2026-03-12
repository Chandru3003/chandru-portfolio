"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const gridSize = 40
    const glowingDots: { x: number; y: number; opacity: number; color: string; decay: number }[] = []
    const colors = ["#00ff9d", "#00c8ff", "#ff6b35"]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGrid = () => {
      ctx.strokeStyle = "#0d2035"
      ctx.lineWidth = 0.5

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const addRandomGlowingDot = () => {
      if (Math.random() < 0.02 && glowingDots.length < 15) {
        const gridX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize
        const gridY = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        glowingDots.push({
          x: gridX,
          y: gridY,
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          decay: 0.005 + Math.random() * 0.01,
        })
      }
    }

    const drawGlowingDots = () => {
      for (let i = glowingDots.length - 1; i >= 0; i--) {
        const dot = glowingDots[i]
        
        // Draw glow
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 20)
        gradient.addColorStop(0, `${dot.color}${Math.floor(dot.opacity * 255).toString(16).padStart(2, "0")}`)
        gradient.addColorStop(1, "transparent")
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 20, 0, Math.PI * 2)
        ctx.fill()

        // Draw center dot
        ctx.fillStyle = `${dot.color}${Math.floor(dot.opacity * 255).toString(16).padStart(2, "0")}`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Decay
        dot.opacity -= dot.decay
        if (dot.opacity <= 0) {
          glowingDots.splice(i, 1)
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      addRandomGlowingDot()
      drawGlowingDots()
      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
