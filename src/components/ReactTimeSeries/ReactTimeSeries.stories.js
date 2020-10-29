import React, { useState } from "react"
import ReactTimeSeries from "./"

export default {
  title: "ReactTimeSeries",
  component: ReactTimeSeries,
}

export const Primary = () => {
  const [sample, setSample] = useState({
    timeData: [
      { time: 0, value: 0 },
      { time: 500, value: 1 },
      { time: 1000, value: 0 },
    ],
    annotation: {
      timestamps: [{ time: 250, label: "example timestamp" }],
      durations: [
        { start: 0, end: 100, label: "example duration" },
        { start: 200, end: 300, label: "example duration" },
        { start: 800, end: 1000, label: "byeeee" },
      ],
    },
  })
  return (
    <ReactTimeSeries
      interface={{}}
      sample={sample}
      onModifySample={setSample}
    />
  )
}