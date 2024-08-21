import { tv } from 'tailwind-variants'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  variant?: 'play' | 'pause'
}

export function Button({ children, variant, ...props }: ButtonProps) {
  const button = tv({
    base: 'flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 p-4 font-bold text-gray-100 transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green-500',
    variants: {
      variant: {
        play: 'bg-green-500 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green-500',
        pause: ' bg-red-500 hover:bg-red-700',
      },
    },
  })

  return (
    <button className={button({ variant })} {...props}>
      {children}
    </button>
  )
}
