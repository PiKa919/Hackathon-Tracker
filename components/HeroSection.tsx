"use client";
import React from 'react';
import { ScrollAnimation, StaggeredAnimation } from '@/components/ScrollAnimations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Globe } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
            🚀 Track Future Hackathons
          </Badge>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            HackTracker
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Your ultimate destination for discovering and tracking hackathons worldwide. 
            <br className="hidden md:block" />
            Never miss a registration deadline again.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animation="scale-in" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Explore Calendar
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300"
            >
              <Globe className="w-5 h-5 mr-2" />
              View All Events
            </Button>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <ScrollAnimation animation="fade-in-up" delay={800}>
          <StaggeredAnimation className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Active Hackathons</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">$2M+</div>
              <div className="text-sm text-muted-foreground">Total Prizes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100K+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Live Updates</div>
            </div>
          </StaggeredAnimation>
        </ScrollAnimation>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};