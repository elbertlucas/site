'use client'
import { scrollToElement2 } from '@/lib/scroll-into-view'
import { motion } from 'framer-motion'
import { ChevronsDownIcon, MessageCircleIcon } from 'lucide-react'
import Image from 'next/image'
import profilePic from '../public/profile.png'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export function Home() {
  const router = useRouter()
  return (
    <motion.div
      transition={{ duration: 1.8, delay: 0.3 }}
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      whileInView={{ opacity: 1 }}
      id="home"
      className="flex flex-col md:flex-row justify-center items-center w-full gap-2 h-screen animate-caret-blink"
    >
      <div className="flex justify-center items-center md:w-3/4 max-w-[1366px]">
        <div className="flex flex-col md:flex-row py-8 justify-between items-center w-full">
          <div className="flex flex-col px-6 md:p-4 md:w-1/2 md:gap-4 text-md md:text-2xl">
            <label className="font-semibold dark:text-slate-300 text-center md:text-left text-primary text-lg">
              Olá, eu sou
            </label>
            <label className="font-bold text-center md:text-left text-primary mb-10 md:mb-6 text-3xl md:text-5xl">
              Elbert Lucas
            </label>
            <label className="font-semibold text-center md:text-left text-xl mb-10 md:text-3xl">
              <span className="text-green-700 dark:text-green-400">
                Desenvolvedor de software Full Stack
              </span>
              ,
              <span className="text-yellow-600 dark:text-yellow-400">
                {' '}
                Engenheiro de dados, BI
              </span>{' '}
              e{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                Automações RPA
              </span>
              .
            </label>
            <h1 className="font-bold dark:text-slate-300 text-center md:text-left md:text-xl text-md mb-10 md:max-w-[90%]">
              Ajudo a impulsionar empresas com soluções descomplicadas e
              inovadoras
            </h1>
            <div className="hidden md:flex md:gap-4 ">
              <a href="https://wa.me/5521993705286" target="_blank">
                <Button className="bg-green-600 hover:bg-green-800 md:w-48 dark:text-primary gap-1">
                  Contato{' '}
                  <MessageCircleIcon className="dark:text-primary size-4" />
                </Button>
              </a>
              <Button
                onClick={() => scrollToElement2('services')}
                className="hidden md:flex md:bg-yellow-600 md:dark:bg-yellow-400 md:hover:bg-yellow-500 md:hover:dark:bg-yellow-500  md:w-48 dark:text-secondary"
              >
                Meus Serviços
              </Button>
              <Button
                onClick={() => router.push('/services/developer')}
                className="hidden md:flex md:bg-cyan-700 md:dark:bg-cyan-400 md:hover:bg-cyan-600 md:hover:dark:bg-cyan-600  md:w-48 dark:text-secondary"
              >
                Habilidades e Projetos
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <Image
              src={profilePic}
              alt="Picture of the author"
              className="rounded-full lg:rounded-md shadow-2xl lg:m-6 size-40 md:size-44 lg:size-56 xl:size-96 border-2 lg:border-0 border-primary"
              placeholder="blur"
            />
            <div className="flex flex-col md:hidden gap-2 mt-4">
              <a href="https://wa.me/5521993705286" target="_blank">
                <Button className="bg-green-600 hover:bg-green-800 w-48 dark:text-primary gap-1">
                  Contato{' '}
                  <MessageCircleIcon className="dark:text-primary size-4" />
                </Button>
              </a>
              <Button
                onClick={() => scrollToElement2('services')}
                className="flex md:hidden bg-yellow-600 dark:bg-yellow-400 hover:bg-yellow-500 hover:dark:bg-yellow-500  w-48 dark:text-secondary"
              >
                Meus Serviços
              </Button>
              <Button
                onClick={() => router.push('/services/developer')}
                className="flex md:hidden bg-cyan-700 dark:bg-cyan-400 hover:bg-cyan-600 hover:dark:bg-cyan-600  w-48 dark:text-secondary"
              >
                Habilidades e Projetos
              </Button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, times: [0, 0.2, 1] }}
        className="mb-6 md:hidden"
      >
        <ChevronsDownIcon
          onClick={() => scrollToElement2('services')}
          className="size-14 w-full"
        />
      </motion.div>
    </motion.div>
  )
}
