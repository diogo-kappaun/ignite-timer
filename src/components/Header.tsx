import { Scroll, Timer } from 'phosphor-react'
import logoIgnite from '../assets/ignite-logo.svg'

import { Link } from './Link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <img src={logoIgnite} alt="" />

      <nav className="flex gap-2">
        <Link link="/" title="Timer">
          <Timer size={24} />
        </Link>
        <Link link="/history" title="Histórico">
          <Scroll size={24} />
        </Link>
      </nav>
    </div>
  )
}
