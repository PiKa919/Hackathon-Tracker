"use client";

import * as React from "react";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DayButton } from "react-day-picker";

const hackathons = {
  "2025-08-06": [
    {
      title: "Gemini Hackathon",
      description: "A hackathon to build amazing things with Gemini.",
      link: "#",
    },
  ],
  "2025-08-10": [
    {
      title: "Hackathon A",
      description: "A hackathon for AI enthusiasts.",
      link: "#",
    },
  ],
  "2025-08-15": [
    {
      title: "Hackathon B",
      description: "A hackathon for web developers.",
      link: "#",
    },
  ],
};

const toDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const InteractiveCalendar = () => {
  const hackathonDates = Object.keys(hackathons).map(dateStr => {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  });

  const CustomDayButton = (props: React.ComponentProps<typeof DayButton>) => {
    const { day } = props;
    const date = day.date;

    if (!date) {
      return <div />;
    }

    const dateString = toDateString(date);
    const dayHackathons = hackathons[dateString];

    if (!dayHackathons) {
      return <CalendarDayButton {...props} />;
    }

    return (
      <Popover>
        <PopoverTrigger asChild>
          <CalendarDayButton {...props} />
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <Card>
            <CardHeader>
              <CardTitle>Hackathons on {dateString}</CardTitle>
            </CardHeader>
            <CardContent>
              {dayHackathons.map((hackathon, index) => (
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
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <Calendar
      modifiers={{ hackathon: hackathonDates }}
      modifiersClassNames={{
        hackathon: "bg-primary/20 text-primary rounded-full",
      }}
      components={{
        DayButton: CustomDayButton,
      }}
    />
  );
};

export default InteractiveCalendar;