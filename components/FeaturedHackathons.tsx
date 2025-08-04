"use client"

import { motion } from "framer-motion"
import { Users, Trophy, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const featuredHackathons = [
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
    id: 3,
    name: "Climate Tech Summit",
    description: "Technology solutions for climate change",
    registrationDate: new Date(2024, 11, 22), // December 22, 2024
    color: "bg-green-500",
    url: "/hackathon/climate-tech",
    prize: "$40,000",
    participants: "400+",
  },
];

const FeaturedHackathons = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Hackathons
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Check out these top hackathons and get ready to build something amazing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredHackathons.map((hackathon) => (
          <motion.div
            key={hackathon.id}
            whileHover={{ y: -5 }}
            className="cursor-pointer"
            onClick={() => window.open(hackathon.url, "_blank")}
          >
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl h-full">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${hackathon.color} flex-shrink-0`} />
                  <div className="flex-1">
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {hackathon.name}
                    </CardTitle>
                    <p className="text-sm text-gray-400 mt-1">{hackathon.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-xs text-green-400 flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    {hackathon.prize}
                  </span>
                  <span className="text-xs text-blue-400 flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {hackathon.participants}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    Registration Date: {hackathon.registrationDate.toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedHackathons;
