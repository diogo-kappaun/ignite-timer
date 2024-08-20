import { tv } from 'tailwind-variants'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: 'task' | 'minutes'
}

export function Input({ variant, ...rest }: InputProps) {
  const input = tv({
    base: 'bg-transparent h-10 border-b-2 border-gray-500 font-bold text-lg px-2 text-gray-100 placeholder:text-gray-500 focus:shadow-none focus:border-green-500',
    variants: {
      variant: {
        task: 'flex-1',
        minutes: 'w-16',
      },
    },
  })
  return <input {...rest} className={input({ variant })}></input>
}
