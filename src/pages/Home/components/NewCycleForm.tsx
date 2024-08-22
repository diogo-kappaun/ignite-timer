import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold text-gray-100">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        id="task"
        className="picker-none flex-1"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  )
}
