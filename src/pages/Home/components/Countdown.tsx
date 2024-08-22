import { differenceInSeconds } from 'date-fns'
import React, { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'

interface CountdownNumberProps {
  children: React.ReactNode
}

function CountdownNumber({ children }: CountdownNumberProps) {
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
  const {
    activeCycle,
    activeCycleID,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleID,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

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
