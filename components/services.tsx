'use client'
import {
  BarChart2Icon,
  CheckIcon,
  ChevronsDownIcon,
  MonitorCheckIcon,
  WorkflowIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { Button } from './ui/button'
import { Card } from './ui/card'
export function Services() {
  const router = useRouter()
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center w-full gap-4 py-[3rem] overscroll-contain bg-neutral-200 dark:bg-transparent"
    >
      <label className="w-2/3 text-2xl md:text-2xl font-semibold mb-4 text-center">
        # Meus Serviços
      </label>
      <motion.div
        animate={{ x: -30 }}
        initial={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-wrap justify-center items-start w-full"
      >
        <Card className="w-full bg-secondary dark:bg-primary-foreground dark:text-green-400 rounded-lg md:w-3/4 m-8 md:mx-0 md:p-8 max-w-[1366px]">
          <div className="flex flex-col text-left justify-between items-start">
            <div className="flex flex-col md:flex-row py-16">
              <div className="flex flex-col justify-center items-center mb-4 p-4 md:w-1/2">
                <div className="flex flex-col w-2/4 justify-center items-center mb-4 px-8 ">
                  <MonitorCheckIcon className="text-green-700 dark:text-green-400 size-20 md:size-32" />
                  <label className="font-bold text-2xl text-center text-green-700 dark:text-green-400">
                    Desenvolvimento Web
                  </label>
                </div>
                <label className="font-semibold text-lg md:text-xl dark:text-slate-300 m-4">
                  Software sob medida para pequenas e médias empresas que
                  desejam transformar e agilizar seus processos de negócios.
                </label>
              </div>
              <div className="flex flex-col justify-center items-start m-8 md:mx-0">
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-green-400 size-4" />
                  <label className="font-bold dark:text-green-400">
                    Foco no que importa
                  </label>
                </div>

                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Seu software não será apenas fácil de usar, vamos nos
                  assegurar de que as pessoas gostem de usá-lo. Vamos trabalhar
                  juntos para tornar as coisas simples, não importa quão
                  complexo seja seu negócio.
                </p>
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-green-400 size-4" />
                  <label className="font-bold dark:text-green-400">
                    Entrega descomplicada
                  </label>
                </div>
                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Seu projeto será construído de forma ágil, utilizando scrum
                  entregamos software funcionando a cada duas semanas. E você
                  receberá sempre uma atualização do progresso.
                </p>
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-green-400 size-4" />
                  <label className="font-bold dark:text-green-400">
                    Sem contratempos
                  </label>
                </div>
                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Trabalhamos cobertura de testes automatizados. Cada recurso e
                  função do seu software estará testado à exaustão garantindo
                  qualidade e evitando retrabalho.
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push('/services/developer')}
              className="bg-green-600 hover:bg-green-800 w-full rounded-md"
            >
              SAIBA MAIS
            </Button>
          </div>
        </Card>
      </motion.div>

      <ChevronsDownIcon className="size-16 w-full" />

      <motion.div
        animate={{ x: -30 }}
        initial={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-wrap justify-center items-start w-full"
      >
        <Card className="w-full bg-secondary dark:bg-primary-foreground  rounded-lg md:w-3/4 m-8 md:mx-0 md:p-8 max-w-[1366px]">
          <div className="flex flex-col text-left justify-between items-center">
            <div className="flex flex-col md:flex-row py-16">
              <div className="flex flex-col justify-center items-center mb-4 p-4 md:w-1/2">
                <div className="flex flex-col w-2/4 justify-center items-center mb-4 px-8 ">
                  <BarChart2Icon className="text-yellow-400 size-20 md:size-32" />
                  <label className="font-bold text-2xl text-center text-yellow-400">
                    Soluções de dados e BI
                  </label>
                </div>
                <label className="font-semibold text-lg md:text-xl dark:text-slate-300 m-4">
                  Soluções de dados e insights precisos para tomadas de decisão
                  estratégicas, reduzindo custos e impulsionando o crescimento
                  corporativo
                </label>
              </div>
              <div className="flex flex-col justify-center items-start m-8 md:mx-0">
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-yellow-400 size-4" />
                  <label className="font-bold dark:text-yellow-400">
                    Rápida tomada de decisão
                  </label>
                </div>

                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Fornecimento de insights valiosos e relevantes através de
                  análises de dados em tempo real, facilitação da identificação
                  de tendências, padrões e oportunidades de negócio, permitindo
                  decisões mais estratégicas e embasadas.
                </p>
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-yellow-400 size-4" />
                  <label className="font-bold dark:text-yellow-400">
                    Alto Desempenho e Eficiência
                  </label>
                </div>
                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Otimização de processos e identificação de áreas de melhoria
                  com base em dados concretos e métricas de desempenho.
                </p>
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-yellow-400 size-4" />
                  <label className="font-bold dark:text-yellow-400">
                    Competitividade e Inovação
                  </label>
                </div>
                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Capacidade de reagir rapidamente às mudanças do mercado e às
                  demandas dos clientes, impulsionando a competitividade.
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push('/services/data-engineer')}
              className="bg-yellow-400 w-full rounded-md"
            >
              SAIBA MAIS
            </Button>
          </div>
        </Card>
      </motion.div>

      <ChevronsDownIcon className="size-16 w-full" />

      <motion.div
        animate={{ x: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-wrap justify-center items-start w-full"
      >
        <Card className="w-full bg-secondary dark:bg-primary-foreground rounded-lg md:w-3/4 m-8 md:mx-0 md:p-8 max-w-[1366px]">
          <div className="flex flex-col text-left justify-between items-center">
            <div className="flex flex-col md:flex-row py-16">
              <div className="flex flex-col justify-center items-center mb-4 p-4 md:w-1/2">
                <div className="flex flex-col w-2/4 justify-center items-center mb-4 px-8 ">
                  <WorkflowIcon className="text-cyan-400 size-20 md:size-32" />
                  <label className="font-bold text-2xl text-center text-cyan-400">
                    Automações e RPA
                  </label>
                </div>
                <label className="font-semibold text-lg md:text-xl dark:text-slate-300 m-4">
                  Soluções de Automações e RPA (Automação Robótica de Processos)
                  aumentam a eficiência operacional, reduzem erros humanos,
                  aumento da produtividade, economia de custos, escalabilidade e
                  liberação de funcionários para tarefas mais estratégicas e de
                  maior valor agregado.
                </label>
              </div>
              <div className="flex flex-col justify-center items-start m-8 md:mx-0">
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-cyan-400 size-4" />
                  <label className="font-bold dark:text-cyan-400">
                    Eficiência operacional
                  </label>
                </div>

                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Automatização de tarefas repetitivas e manuais, liberando
                  recursos humanos para atividades mais estratégicas.
                </p>
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-cyan-400 size-4" />
                  <label className="font-bold dark:text-cyan-400">
                    Precisão e redução de Erros
                  </label>
                </div>
                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Eliminação de erros humanos em tarefas repetitivas, garantindo
                  consistência e qualidade nos resultados.
                </p>
                <div className="flex flex-row justify-start items-center gap-2">
                  <CheckIcon className="text-cyan-400 size-4" />
                  <label className="font-bold dark:text-cyan-400">
                    Economia de recursos
                  </label>
                </div>
                <p className="font-semibold dark:text-slate-300 text-sm mb-6 max-w-screen-md">
                  Redução de custos operacionais ao automatizar processos,
                  diminuindo a necessidade de mão de obra e minimização de
                  retrabalho e correções de erros, economizando recursos
                  financeiros e temporais
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push('/services/automation')}
              className="bg-cyan-400 w-full rounded-md"
            >
              SAIBA MAIS
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
