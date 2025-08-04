"use client";
import React from 'react';
import { ScrollAnimation } from '@/components/ScrollAnimations';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollAnimation animation="fade-in">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HackTracker
            </h3>
            <p className="text-muted-foreground">
              Built with ❤️ for the hacker community
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 HackTracker</span>
              <span>•</span>
              <span>Made with Next.js & Tailwind</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};