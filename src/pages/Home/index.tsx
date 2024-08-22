import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { HandPalm, Play } from 'phosphor-react'

import { useContext } from 'react'
import { Button } from '../../components/Button'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa!'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')

  const isSubmitDisabled = !task

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
        action=""
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <Button variant="pause" type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} /> Interromper
          </Button>
        ) : (
          <Button variant="play" type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Começar
          </Button>
        )}
      </form>
    </main>
  )
}
