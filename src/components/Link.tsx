import { NavLink } from 'react-router-dom'

interface LinkProps {
  link: string
  title: string
  children: React.ReactNode
}

export function Link({ link, title, children }: LinkProps) {
  return (
    <NavLink
      to={link}
      title={title}
      className="flex h-12 w-12 items-center justify-center border-y-[3px] border-transparent text-gray-100 hover:border-b-green-500"
    >
      {({ isActive }) => (
        <span className={isActive ? 'text-green-500' : ''}>{children}</span>
      )}
    </NavLink>
  )
}
