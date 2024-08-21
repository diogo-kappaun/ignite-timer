import React from 'react'

interface CountdownProps {
  children: React.ReactNode
}

function CountdownNumber({ children }: CountdownProps) {
  return <span className="rounded-lg bg-gray-700 px-4 py-8">{children}</span>
}

function CountdownSeparator() {
  return (
    <div className="flex w-16 justify-center overflow-hidden rounded-lg bg-gray-700 py-8 text-green-500">
      :
    </div>
  )
}

export function Countdown() {
  return (
    <div className="flex gap-4 font-mono text-[10rem] leading-[8rem] text-gray-100">
      <CountdownNumber>{minutes[0]}</CountdownNumber>
      <CountdownNumber>{minutes[1]}</CountdownNumber>
      <CountdownSeparator />
      <CountdownNumber>{seconds[0]}</CountdownNumber>
      <CountdownNumber>{seconds[1]}</CountdownNumber>
    </div>
  )
}
