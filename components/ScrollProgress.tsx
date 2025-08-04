"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

const sections = [
  { id: "home", tooltip: "Home" },
  { id: "calendar", tooltip: "Calendar" },
  { id: "features", tooltip: "Features" },
  { id: "featured-hackathons", tooltip: "Featured Hackathons" },
  { id: "newsletter", tooltip: "Newsletter" },
]

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[999] hidden md:flex flex-col items-center gap-4">
      <div className="relative h-64 w-px bg-gray-700">
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary"
          style={{ height: scaleX, transformOrigin: "top" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <a href={`#${section.id}`} key={section.id}>
            <motion.div
              className="w-3 h-3 rounded-full border-2 border-gray-600 transition-colors"
              animate={{
                backgroundColor: activeSection === section.id ? "var(--primary)" : "transparent",
                borderColor: activeSection === section.id ? "var(--primary)" : "var(--border)",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default ScrollProgress
