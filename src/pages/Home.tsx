import { Play } from 'phosphor-react'

import { CountdownNumber, CountdownSeparator } from '../components/Countdown'
import { Input } from '../components/Input'

export function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form className="flex flex-col items-center gap-14" action="">
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold text-gray-100">
          <label htmlFor="task">Vou trabalhar em</label>
          <Input
            variant="task"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <Input
            variant="minutes"
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </div>

        <div className="flex gap-4 font-mono text-[10rem] leading-[8rem] text-gray-100">
          <CountdownNumber>0</CountdownNumber>
          <CountdownNumber>0</CountdownNumber>
          <CountdownSeparator />
          <CountdownNumber>0</CountdownNumber>
          <CountdownNumber>0</CountdownNumber>
        </div>

        <button
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 p-4 font-bold text-gray-100 transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green-500"
          type="submit"
          disabled
        >
          <Play size={24} /> Começar
        </button>
      </form>
    </main>
  )
}
