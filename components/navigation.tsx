'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import LogoIcon from '../app/logo.svg'
import {
  BarChart2Icon,
  MonitorCheckIcon,
  Moon,
  Sun,
  WorkflowIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { useRouter } from 'next/navigation'

export function Navigation() {
  const router = useRouter()
  const { setTheme } = useTheme()

  return (
    <header className="flex justify-between items-center w-screen fixed top-0 p-2 px-6 md:p-4 md:px-6 bg-gray-100 dark:bg-slate-900">
      <h2 className="hidden md:flex">
        <strong>elbert</strong>lucas
      </h2>
      <ul className="flex items-center gap-4 text-sm">
        <li
          onClick={() => router.push('/')}
          className="p-2 flex gap-2 items-center hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
        >
          <span className="hidden md:flex">home</span>
          <Image priority src={LogoIcon} alt="Follow us on Twitter" />
        </li>
        <li
          onClick={() => router.push('/services/developer')}
          className="p-2 flex gap-2 items-center hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
        >
          <span className="hidden md:flex">Desenvolvimento web</span>
          <MonitorCheckIcon className="dark:text-green-400 size-6" />
        </li>
        <li
          onClick={() => router.push('/services/data-engineer')}
          className="p-2 flex gap-2 items-center hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
        >
          <span className="hidden md:flex">BI</span>
          <BarChart2Icon className="text-yellow-400 size-6" />
        </li>
        <li
          onClick={() => router.push('/services/automation')}
          className="p-2 flex gap-2 items-center hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
        >
          <span className="hidden md:flex">Automação</span>
          <WorkflowIcon className="text-cyan-400 size-6" />
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
    </header>
  )
}
