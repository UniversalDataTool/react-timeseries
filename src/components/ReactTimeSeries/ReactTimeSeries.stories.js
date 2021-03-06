import React, { useState } from "react"
import ReactTimeSeries from "./"

export default {
  title: "ReactTimeSeries",
  component: ReactTimeSeries,
}

export const SimpleTimeSeries = () => {
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
      interface={{ allowCustomLabels: true }}
      sample={sample}
      onModifySample={setSample}
    />
  )
}

export const WithAudioURL = () => {
  const [sample, setSample] = useState({
    audioUrl:
      "https://s3.amazonaws.com/datasets.workaround.online/voice-samples/001/voice.mp3",
  })
  return (
    <ReactTimeSeries
      interface={{ allowCustomLabels: true }}
      sample={sample}
      onModifySample={setSample}
    />
  )
}

export const ReallySimple = () => {
  return (
    <ReactTimeSeries
      interface={{ allowCustomLabels: true }}
      sample={{
        timeData: [
          { time: 0, value: 0 },
          { time: 500, value: 750 },
          { time: 1000, value: 1000 },
        ],
      }}
      onModifySample={() => null}
    />
  )
}

export const SmallValues = () => {
  return (
    <ReactTimeSeries
      interface={{
        timeFormat: "none",
        allowCustomLabels: true,
      }}
      sample={{
        timeData: [
          { time: 0, value: 0 },
          { time: 0.02, value: 500 },
          { time: 0.05, value: 1000 },
        ],
      }}
      onModifySample={() => null}
    />
  )
}

export const PredefinedLabelsOnly = () => {
  const [sample, setSample] = useState({
    audioUrl:
      "https://s3.amazonaws.com/datasets.workaround.online/voice-samples/001/voice.mp3",
  })
  return (
    <ReactTimeSeries
      interface={{
        durationLabels: ["duration1", "duration2"],
        timestampLabels: ["ts1", "ts2"],
      }}
      sample={sample}
      onModifySample={setSample}
    />
  )
}

export const CreateTimestampsOnly = () => {
  const [sample, setSample] = useState({
    audioUrl:
      "https://s3.amazonaws.com/datasets.workaround.online/voice-samples/001/voice.mp3",
  })
  return (
    <ReactTimeSeries
      interface={{
        durationLabels: ["duration1", "duration2"],
        timestampLabels: ["ts1", "ts2"],
        enabledTools: ["create-timestamps"],
      }}
      sample={sample}
      onModifySample={setSample}
    />
  )
}

export const CreateDurationsOnly = () => {
  const [sample, setSample] = useState({
    audioUrl:
      "https://s3.amazonaws.com/datasets.workaround.online/voice-samples/001/voice.mp3",
  })
  return (
    <ReactTimeSeries
      interface={{
        durationLabels: ["duration1", "duration2"],
        timestampLabels: ["ts1", "ts2"],
        enabledTools: ["create-durations"],
      }}
      sample={sample}
      onModifySample={setSample}
    />
  )
}

export const TimeDataFromCSV = () => {
  const [sample, setSample] = useState({
    csvUrl:
      "https://gist.githubusercontent.com/philaturner/644b3e8bd17641766d90f38d475edcc6/raw/a6c35e97a89eda49098def90fe2e750ceb898f79/tesla.csv",
  })
  return (
    <ReactTimeSeries
      interface={{
        timeFormat: "dates",
        durationLabels: ["duration1", "duration2"],
        timestampLabels: ["ts1", "ts2"],
        enabledTools: ["create-durations"],
        graphs: [{ keyName: "high" }, { keyName: "low" }],
      }}
      sample={sample}
      onModifySample={setSample}
    />
  )
}

export const LargeTimeNoneFormat = () => {
  return (
    <ReactTimeSeries
      interface={{
        timeFormat: "none",
        allowCustomLabels: true,
      }}
      sample={{
        timeData: [
          { time: 0, value: 0 },
          { time: 200, value: 500 },
          { time: 1000, value: 1000 },
          { time: 10000, value: 500 },
        ],
      }}
      onModifySample={() => null}
    />
  )
}

export const AudioPlayback = () => {
  return (
    <ReactTimeSeries
      interface={{
        timeFormat: "none",
        allowCustomLabels: true,
      }}
      sample={{
        audioUrl:
          "https://s3.amazonaws.com/datasets.workaround.online/voice-samples/001/voice.mp3",
      }}
      onModifySample={() => null}
    />
  )
}
