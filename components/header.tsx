"use client"

import * as React from "react"
import { AudioLinesIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/scroll-into-view"

export function Header() {
  const { setTheme } = useTheme()

  return (
    <header className="flex justify-between items-center w-screen fixed top-2 px-6">
      <AudioLinesIcon />
      <div className="flex justify-center items-center gap-2">
        <ul className="hidden sm:flex justify-center items-center gap-2 text-sm">
          <li
            onClick={() => scrollToElement('home')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            quem eu sou?
          </li>
          <li
            onClick={() => scrollToElement('services')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            o que faço?
          </li>
          <li
            onClick={() => scrollToElement('projects')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            meus projetos
          </li>
          <li
            onClick={() => scrollToElement('contacts')}
            className="p-2 hover:dark:bg-secondary hover:bg-gray-200 cursor-pointer rounded-sm"
          >
            contato
          </li>
        </ul>

        <Button variant="outline" size="icon" className="w-auto h-auto">
          <Sun
            onClick={() => setTheme("dark")}
            className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 p-2" />
          <Moon
            onClick={() => setTheme("light")}
            className="absolute h-[2.2rem] w-[2.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 p-2" />
        </Button>
      </div>
    </header>
  )
}
