import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'
import { Card } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  NestjsOriginal,
  TypescriptOriginal,
  ReactOriginal,
  PostgresqlOriginal,
  DockerOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TailwindcssOriginal,
  GitOriginal,
  JestPlain,
  NginxOriginal,
  OpentelemetryOriginal,
} from 'devicons-react'

export default function HomePage() {
  return (
    <div className="flex flex-col h-full md:h-auto justify-start items-center dark:bg-slate-900">
      <Navigation />
      <div className="flex flex-col md:w-2/3 max-w-[1366px] py-2 px-8">
        <div className="flex flex-col w-full pt-28">
          <label className="font-bold text-lg md:text-4xl  text-green-700 dark:text-green-400">
            Desenvolvimento de software
          </label>
          <label className="font-bold  text-sm md:text-lg  text-slate-700 dark:text-slate-400">
            Expeciência no desenvolvimento web utilizando tecnologias modernas
            do universo Javacript/Typescript
          </label>
          <div className="grid grid-flow-row my-[1.2rem] grid-cols-5 md:grid-cols-10 w-auto justify-center gap-1 py-4 md:gap-4 md:mx-8 ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <NestjsOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Nest</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TypescriptOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <ReactOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>React</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <PostgresqlOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Postgres</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <NodejsOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Nodejs</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TailwindcssOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <GitOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <JestPlain size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Jest</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <NginxOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Nginx</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <DockerOriginal size="45" className="grid col-span-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Docker</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <label className="font-bold mb-4 md:text-2xl  text-green-700 dark:text-green-400">
            Habilidades
          </label>
          <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-6">
            <Card className="flex flex-col col-span-1 bg-gray-100 dark:bg-primary-foreground rounded-lg p-2 md:p-4 gap-2">
              <label className="font-bold text-lg ">
                Código e boas práticas:
              </label>
              <label className="font-bold text-sm  text-slate-700 dark:text-slate-400 ">
                Controle de versão com git, testes automatizados, padrão e
                formatação de código
              </label>
              <div className="flex justify-center gap-2 md:gap-4 p-2"></div>
            </Card>
            <Card className="flex flex-col col-span-1 bg-gray-100 dark:bg-primary-foreground rounded-lg p-2 md:p-4 gap-2">
              <label className="font-bold text-lg ">Design Parterns:</label>
              <label className="font-bold text-sm text-left text-slate-700 dark:text-slate-400 ">
                <ul className="grid grid-flow-row grid-cols-2 gap-1">
                  <li>Singleton</li>
                  <li>Adapter</li>
                  <li>Decorator</li>
                  <li>Builder</li>
                  <li>Dependency Injection</li>
                  <li>e mais... </li>
                </ul>
              </label>
            </Card>
            <Card className="flex flex-col col-span-1 bg-gray-100 dark:bg-primary-foreground rounded-lg p-2 md:p-4 gap-2">
              <label className="font-bold text-lg ">
                Deploy e observabilidade:
              </label>
              <label className="font-bold text-sm  text-slate-700 dark:text-slate-400 ">
                Deploy de projeto em cloud e monitoramento de logs, traces e
                metricas.
              </label>
              <div className="flex justify-center gap-2 md:gap-4 p-2"></div>
            </Card>
          </div>
        </div>
        <label className="font-bold my-4 md:text-2xl  text-green-700 dark:text-green-400">
          Projetos
        </label>
        <div>
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  )
}
