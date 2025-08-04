"use client"

import { motion } from "framer-motion"
import { Home, Calendar, Info, Mail } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react"

const navItems = [
  { icon: Home, tooltip: "Home", href: "#home", id: "home" },
  { icon: Calendar, tooltip: "Calendar", href: "#calendar", id: "calendar" },
  { icon: Info, tooltip: "Features", href: "#features", id: "features" },
  { icon: Mail, tooltip: "Newsletter", href: "#newsletter", id: "newsletter" },
]

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <TooltipProvider>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-1/2 right-4 transform -translate-y-1/2 z-[999]"
      >
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-full p-2 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  className="p-3 rounded-full transition-colors"
                  style={{
                    backgroundColor: activeSection === item.id ? "var(--primary)" : "transparent",
                  }}
                >
                  <item.icon
                    className="w-6 h-6 transition-colors"
                    style={{
                      color: activeSection === item.id ? "white" : "var(--muted-foreground)",
                    }}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </TooltipProvider>
  )
}

export default Navigation