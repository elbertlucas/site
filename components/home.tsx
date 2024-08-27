'use client'
import { scrollToElement, scrollToElement2 } from '@/lib/scroll-into-view'
import { motion } from 'framer-motion'
import {
  ChevronsDownIcon,
  MessageCircleIcon,
  SquareKanbanIcon,
} from 'lucide-react'
import Image from 'next/image'
import profilePic from '../public/profile.png'
import { Button } from './ui/button'

export function Home() {
  return (
    <motion.div
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      id="home"
      className="flex py-2 flex-col md:flex-row justify-center items-center w-full md:px-6 gap-2 h-screen animate-caret-blink"
    >
      <div className="flex justify-center items-center px-4 py-8 mt-24 md:mt-0 mb-[1rem] md:mb-[4rem] md:w-full gap-4">
        <div className="flex flex-col md:flex-row py-8 justify-between items-center w-full px-4 mb-[1rem] md:mb-[4rem]">
          <div className="flex flex-col px-6 md:p-4 md:w-1/2 gap-2 text-md md:text-2xl">
            <label className="font-semibold text-primary mb-2 text-md">
              Olá, eu sou
            </label>
            <label className="font-bold text-primary mb-2 md:mb-4 text-3xl md:text-5xl">
              Elbert Lucas
            </label>
            <label className="font-semibold text-md mb-4 md:mb-8 text-left md:text-2xl">
              <span className="text-green-700 dark:text-green-400">
                Desenvolvedor de software
              </span>
              , com experiência em{' '}
              <span className="text-yellow-600 dark:text-yellow-400">
                {' '}
                Engenharia de dados, BI
              </span>{' '}
              e{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                Automações RPA
              </span>
              .
            </label>
            <h1 className="font-bold dark:text-slate-300 text-center md:text-left md:text-xl text-md mb-8">
              Ajudo a impulsionar empresas com soluções descomplicadas e
              inovadoras
            </h1>
            <div className="hidden md:flex md:gap-4">
              <a href="https://wa.me/5521993705286" target="_blank">
                <Button className="bg-green-800 hover:bg-green-600 w-60 dark:text-primary gap-1">
                  Contato{' '}
                  <MessageCircleIcon className="dark:text-primary size-4" />
                </Button>
              </a>
              <Button
                onClick={() => scrollToElement('services')}
                className="hidden md:flex md:bg-cyan-600 md:dark:bg-cyan-400 md:w-60 md:text-secundary"
              >
                Veja mais
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <Image
              src={profilePic}
              alt="Picture of the author"
              className="rounded-full md:rounded-md shadow-2xl m-2 md:m-6 size-40 md:size-96 border-4 md:border-0 border-primary"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, times: [0, 0.2, 1] }}
        className="mb-10 md:hidden"
      >
        <ChevronsDownIcon
          onClick={() => scrollToElement2('services')}
          className="size-16 w-full"
        />
      </motion.div>
    </motion.div>
  )
}
