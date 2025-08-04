"use client"
import * as React from "react"
import { usePopper } from "react-popper"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Button } from "./button"

export function CalendarHoverCard({
  referenceElement,
  children,
  day,
}: {
  referenceElement: HTMLElement | null
  children: React.ReactNode
  day: any
}) {
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  })

  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      className="z-50"
    >
      <Card>
        <CardHeader>
          <CardTitle>{day.date.toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No events</p>
          <Button className="mt-4 w-full">Add Event</Button>
        </CardContent>
      </Card>
    </div>
  )
}
