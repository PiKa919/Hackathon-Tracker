"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Trophy, ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FeaturedHackathons from "@/components/FeaturedHackathons";
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Footer } from "@/components/Footer"
import { ScrollAnimation } from "@/components/ScrollAnimations"

// Mock hackathon data
const hackathons = [
  {
    id: 1,
    name: "AI Revolution Hackathon",
    description: "Build the future with AI and machine learning",
    registrationDate: new Date(2024, 11, 15), // December 15, 2024
    color: "bg-purple-500",
    url: "/hackathon/ai-revolution",
    prize: "$50,000",
    participants: "500+",
  },
  {
    id: 2,
    name: "Web3 Innovation Challenge",
    description: "Decentralized solutions for tomorrow",
    registrationDate: new Date(2024, 11, 15), // December 15, 2024
    color: "bg-blue-500",
    url: "/hackathon/web3-innovation",
    prize: "$30,000",
    participants: "300+",
  },
  {
    id: 3,
    name: "Climate Tech Summit",
    description: "Technology solutions for climate change",
    registrationDate: new Date(2024, 11, 22), // December 22, 2024
    color: "bg-green-500",
    url: "/hackathon/climate-tech",
    prize: "$40,000",
    participants: "400+",
  },
  {
    id: 4,
    name: "FinTech Future",
    description: "Revolutionary financial technology solutions",
    registrationDate: new Date(2024, 11, 28), // December 28, 2024
    color: "bg-yellow-500",
    url: "/hackathon/fintech-future",
    prize: "$35,000",
    participants: "250+",
  },
  {
    id: 5,
    name: "Healthcare Innovation Lab",
    description: "Digital health solutions for better care",
    registrationDate: new Date(2025, 0, 5), // January 5, 2025
    color: "bg-red-500",
    url: "/hackathon/healthcare-innovation",
    prize: "$45,000",
    participants: "350+",
  },
  {
    id: 6,
    name: "EdTech Revolution",
    description: "Transforming education through technology",
    registrationDate: new Date(2025, 0, 5), // January 5, 2025
    color: "bg-indigo-500",
    url: "/hackathon/edtech-revolution",
    prize: "$25,000",
    participants: "200+",
  },
  {
    id: 7,
    name: "Gemini Hackathon",
    description: "A hackathon to build amazing things with Gemini.",
    registrationDate: new Date(2025, 7, 6), // August 6, 2025
    color: "bg-pink-500",
    url: "#",
    prize: "$100,000",
    participants: "1000+",
  },
  {
    id: 8,
    name: "Data Science Challenge",
    description: "A challenge for data scientists.",
    registrationDate: new Date(2025, 7, 6), // August 6, 2025
    color: "bg-blue-500",
    url: "#",
    prize: "$50,000",
    participants: "500+",
  },
]

function HackathonCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 1))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const today = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  // Create calendar grid
  const calendarDays = []

  // Empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getHackathonsForDate = (day: number) => {
    const date = new Date(year, month, day)
    return hackathons.filter((hackathon) => hackathon.registrationDate.toDateString() === date.toDateString())
  }

  const handleDateClick = (day: number | null) => {
    if (!day) return

    const date = new Date(year, month, day)
    setSelectedDate(date)
  }

  const isToday = (day: number) => {
    const date = new Date(year, month, day)
    return date.toDateString() === today.toDateString()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const selectedHackathons = selectedDate ? getHackathonsForDate(selectedDate.getDate()) : []

  return (
    <div className="relative flex gap-8">
      <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-full">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => navigateMonth("prev")} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180 text-gray-400" />
          </button>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {monthNames[month]} {year}
          </h2>

          <button onClick={() => navigateMonth("next")} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-gray-400 font-medium py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4">
          {calendarDays.map((day, index) => {
            if (!day) {
              return <div key={index} className="h-16" />
            }

            const dayHackathons = getHackathonsForDate(day)
            const hasHackathons = dayHackathons.length > 0

            return (
              <motion.div
                key={day}
                className={`
                  relative h-16 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200
                  ${
                    selectedDate?.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold"
                      : isToday(day)
                        ? "bg-gray-700"
                        : hasHackathons
                          ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                          : "hover:bg-gray-800/50"
                  }
                `}
                onClick={() => handleDateClick(day)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`text-lg ${isToday(day) ? "text-white" : "text-gray-300"}`}>{day}</span>

                {/* Hackathon indicators */}
                {hasHackathons && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {dayHackathons.slice(0, 3).map((hackathon, idx) => (
                      <div key={hackathon.id} className={`w-2 h-2 rounded-full ${hackathon.color}`} />
                    ))}
                    {dayHackathons.length > 3 && <div className="w-2 h-2 rounded-full bg-gray-500" />}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Details Card */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="w-1/3"
        >
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white">
                Hackathons on {selectedDate.toLocaleDateString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedHackathons.length > 0 ? (
                <div className="space-y-4">
                  {selectedHackathons.map((hackathon) => (
                    <motion.div
                      key={hackathon.id}
                      className="group cursor-pointer"
                      whileHover={{ x: 4 }}
                      onClick={() => window.open(hackathon.url, "_blank")}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full ${hackathon.color} mt-2 flex-shrink-0`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors flex items-center">
                            {hackathon.name}
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">{hackathon.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xs text-green-400 flex items-center">
                              <Trophy className="w-3 h-3 mr-1" />
                              {hackathon.prize}
                            </span>
                            <span className="text-xs text-blue-400 flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {hackathon.participants}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No hackathons scheduled for this day.</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

export default function HackathonTracker() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      {/* Calendar Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
        <div className="relative z-10">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Interactive Calendar
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track registration dates, click on dates to see events, and never miss an opportunity to innovate.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale-in" delay={300}>
            <div className="w-full max-w-6xl mx-auto">
                <HackathonCalendar />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <FeaturesSection />
      
      <FeaturedHackathons />

      <Footer />
    </div>
  )
}
