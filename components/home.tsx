'use client'
import { scrollToElement2 } from '@/lib/scroll-into-view'
import { motion } from 'framer-motion'
import { ChevronsDownIcon } from 'lucide-react'
import Image from 'next/image'
import profilePic from '../public/profile.png'

export function Home() {
  return (
    <motion.div
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      id="home"
      className="flex flex-col py-2 justify-center items-center w-full md:px-6 gap-2 h-screen animate-caret-blink"
    >
      <h1 className="flex flex-col md:flex-row pt-8 justify-center items-center w-[90%] h-screen md:w-8/12 font-bold text-4xl md:text-5xl text-center">
        Ajudo a impulsionar empresas com soluções descomplicadas e inovadoras
      </h1>
      <label className="w-2/3 text-2xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        # Quem eu sou?{' '}
      </label>
      <div className="flex flex-col md:flex-row py-8 justify-center items-center bg-secondary dark:bg-primary-foreground w-[90%] px-4 mb-[1rem] md:mb-[4rem] md:w-8/12 gap-4 border-2 shadow-md rounded-md">
        <div className="flex flex-col px-6 md:p-4 md:w-2/3 gap-2 text-md md:text-2xl">
          <label className="font-semibold text-primary">
            Olá, eu sou <strong>Elbert Lucas</strong>
          </label>
          <label className="font-semibold">
            <span className="text-green-700 dark:text-green-400 animate-spin">
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
        </div>
        <Image
          src={profilePic}
          alt="Picture of the author"
          className="rounded-full shadow-2xl m-2 md:m-6 size-32 md:size-52 border-4 border-primary"
          placeholder="blur"
        />
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
