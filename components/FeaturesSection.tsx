"use client";
import React from 'react';
import { ScrollAnimation, StaggeredAnimation } from '@/components/ScrollAnimations';
import { Code, Zap, Trophy, Users, Calendar, Globe } from 'lucide-react';

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent'
  };

  return (
    <div className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
      <div className={`mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose HackTracker?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to stay ahead in the hackathon game
            </p>
          </div>
        </ScrollAnimation>
        
        <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="w-8 h-8" />}
            title="Smart Calendar"
            description="Visual calendar with registration dates, event dates, and smart notifications."
            color="primary"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Real-time Updates"
            description="Get instant notifications about new hackathons and deadline changes."
            color="secondary"
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8" />}
            title="Prize Tracking"
            description="Track prize pools, winners, and success stories from past events."
            color="accent"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Community Hub"
            description="Connect with fellow hackers, form teams, and share experiences."
            color="primary"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8" />}
            title="Tech Stacks"
            description="Filter hackathons by preferred technologies and skill requirements."
            color="secondary"
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="Global Events"
            description="Discover hackathons worldwide, both virtual and in-person events."
            color="accent"
          />
        </StaggeredAnimation>
      </div>
    </section>
  );
};