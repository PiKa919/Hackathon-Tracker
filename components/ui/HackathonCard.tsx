"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Hackathon {
  title: string;
  description: string;
  link: string;
}

interface HackathonCardProps {
  date: string;
  hackathons: Hackathon[];
}

const HackathonCard = ({ date, hackathons }: HackathonCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hackathons on {date}</CardTitle>
      </CardHeader>
      <CardContent>
        {hackathons.map((hackathon, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{hackathon.title}</h3>
            <p>{hackathon.description}</p>
            <a href={hackathon.link} className="text-primary hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default HackathonCard;
