"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ScrollAnimations"

export const Footer = () => {
  return (
    <footer id="newsletter" className="py-20 px-6 relative bg-gray-900/50 backdrop-blur-xl border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Newsletter Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="mb-8 space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-md text-muted-foreground">
                  Join our weekly newsletter to get the latest hackathon announcements delivered straight to your inbox every Sunday. No spam, just pure innovation.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto md:mx-0"
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
                <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
                  We respect your privacy and will only send you hackathon details once a week.
                </p>
              </motion.div>
            </div>

            {/* Footer Info Section */}
            <div className="md:w-1/3 text-center md:text-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  HackTracker
                </h3>
                <p className="text-muted-foreground">
                  Built with ❤️ for the hacker community
                </p>
                <div className="flex justify-center md:justify-end space-x-4 text-sm text-muted-foreground">
                  <span>© 2024 HackTracker</span>
                  <span>•</span>
                  <span>Next.js & Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
