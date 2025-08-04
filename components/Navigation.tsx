"use client"

import { motion } from "framer-motion"
import { Home, Calendar, Info, Mail } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { icon: Home, tooltip: "Home", href: "#" },
  { icon: Calendar, tooltip: "Calendar", href: "#" },
  { icon: Info, tooltip: "About", href: "#" },
  { icon: Mail, tooltip: "Contact", href: "#" },
]

const Navigation = () => {
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
                  className="p-3 hover:bg-gray-800 rounded-full transition-colors"
                >
                  <item.icon className="w-6 h-6 text-gray-400" />
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