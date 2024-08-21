import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { CountdownNumber, CountdownSeparator } from '../components/Countdown'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa!'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleID, setActiveCycleID] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleID)

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((prevState) => [...prevState, newCycle])
    setActiveCycleID(id)
    setAmountSecondsPassed(0)

    reset()
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
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

  const task = watch('task')

  const isSubmitDisabled = !task

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
        action=""
      >
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold text-gray-100">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            className="picker-none flex-1"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            id="minutesAmount"
            className="w-16"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </div>

        <div className="flex gap-4 font-mono text-[10rem] leading-[8rem] text-gray-100">
          <CountdownNumber>{minutes[0]}</CountdownNumber>
          <CountdownNumber>{minutes[1]}</CountdownNumber>
          <CountdownSeparator />
          <CountdownNumber>{seconds[0]}</CountdownNumber>
          <CountdownNumber>{seconds[1]}</CountdownNumber>
        </div>

        <button
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 p-4 font-bold text-gray-100 transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green-500"
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Play size={24} /> Começar
        </button>
      </form>
    </main>
  )
}
