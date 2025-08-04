"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Newsletter = () => {
  return (
    <section className="py-20 px-6 relative bg-gray-900/50 backdrop-blur-xl border-t border-gray-800">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Subscribe to our Newsletter
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our weekly newsletter to get the latest hackathon announcements delivered straight to your inbox every Sunday. No spam, just pure innovation.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <form className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-gray-800 border-gray-700 text-white"
          />
          <Button type="submit" variant="default">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy and will only send you hackathon details once a week.
        </p>
      </motion.div>
    </section>
  )
}

export default Newsletter
