'use client'

import { Button } from '@/components/ui/button'
import { scrollToElement2 } from '@/lib/scroll-into-view'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

export function Header() {
  const { setTheme } = useTheme()

  function checkScroll() {
    const header = document.getElementById('header')
    if (window.scrollY > 50) {
      header?.classList.remove('bg-transparent')
      header?.classList.add('bg-gray-100')
      header?.classList.add('dark:bg-slate-900')
    } else {
      header?.classList.remove('bg-gray-100')
      header?.classList.remove('dark:bg-slate-900')
      header?.classList.add('bg-transparent')
    }
  }

  React.useEffect(() => {
    window?.addEventListener('scroll', checkScroll)
  })

  return (
    <header
      id="header"
      className="flex justify-between items-center w-screen fixed transition-colors top-0 p-2 px-6 md:p-4 md:px-6 z-50"
    >
      <h2>
        <strong>elbert</strong>lucas
      </h2>
      <div className="flex justify-center items-center gap-2">
        <ul className="hidden sm:flex justify-center items-center gap-2 text-sm">
          <li
            onClick={() => scrollToElement2('home')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            home
          </li>
          <li
            onClick={() => scrollToElement2('services')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            serviços
          </li>
          <li
            onClick={() => scrollToElement2('contacts')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            contato
          </li>
        </ul>

        <Button variant="outline" size="icon" className="w-auto h-auto">
          <Sun
            onClick={() => setTheme('dark')}
            className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 p-2"
          />
          <Moon
            onClick={() => setTheme('light')}
            className="absolute h-[2.2rem] w-[2.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 p-2"
          />
        </Button>
      </div>
    </header>
  )
}
