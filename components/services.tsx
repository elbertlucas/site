import { BarChart2Icon, MonitorCheckIcon, WorkflowIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

export function Services() {
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center w-full gap-4 overscroll-contain py-[5rem]"
    >
      <label className="w-2/3 text-2xl md:text-2xl font-semibold mb-4 text-center sm:text-left">
        # Conheça meus serviços{' '}
      </label>
      <div className="flex flex-wrap justify-center items-start w-full gap-4">
        <Card className="min-w-[250px] max-w-[400px] border-2 bg-secondary dark:bg-primary-foreground border-green-400 rounded-lg">
          <div className="flex flex-col text-center md:text-start md:flex-row w-full h-36 justify-center items-center gap-6">
            <MonitorCheckIcon className="text-green-400 size-10 md:size-20" />
            <CardTitle className="w-full text-md md:w-1/2 md:text-2xl">
              Desenvolvimento Web
            </CardTitle>
          </div>
          <CardHeader className="md:h-[230px] dark:text-white font-semibold">
            Software sob medida para pequenas e médias empresas que desejam
            transformar e agilizar seus processos de negócios.
          </CardHeader>
          <Accordion type="single" collapsible className="px-4 mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>Foco no que importa</AccordionTrigger>
              <AccordionContent>
                Seu software não será apenas fácil de usar, vamos nos assegurar
                de que as pessoas gostem de usá-lo. Vamos trabalhar juntos para
                tornar as coisas simples, não importa quão complexo seja seu
                negócio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Entrega descomplicada</AccordionTrigger>
              <AccordionContent>
                Seu projeto será construído de forma ágil, utilizando scrum
                entregamos software funcionando a cada duas semanas. E você
                receberá sempre uma atualização do progresso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Sem contratempos</AccordionTrigger>
              <AccordionContent>
                Trabalhamos cobertura de testes automatizados. Cada recurso e
                função do seu software estará testado à exaustão garantindo
                qualidade e evitando retrabalho.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="bg-green-400 w-full rounded-none">
            SAIBA MAIS
          </Button>
        </Card>
        <Card className="min-w-[250px] max-w-[400px] bg-secondary dark:bg-primary-foreground border-2 border-yellow-400 rounded-lg">
          <div className="flex flex-col text-center md:text-start md:flex-row w-full h-36 justify-center items-center gap-6">
            <BarChart2Icon className="text-yellow-400 size-10 md:size-20" />
            <CardTitle className="w-full text-md md:w-1/2 md:text-2xl">
              Soluções de dados e BI
            </CardTitle>
          </div>
          <CardHeader className="md:h-[208px] dark:text-white font-semibold">
            Soluções de dados e insights precisos para tomadas de decisão
            estratégicas, reduzindo custos e impulsionando o crescimento
            corporativo
          </CardHeader>
          <Accordion type="single" collapsible className="p-6 mb-2">
            <AccordionItem value="item-1">
              <AccordionTrigger>Rápida tomada de decisão</AccordionTrigger>
              <AccordionContent>
                Fornecimento de insights valiosos e relevantes através de
                análises de dados em tempo real, facilitação da identificação de
                tendências, padrões e oportunidades de negócio, permitindo
                decisões mais estratégicas e embasadas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Alto Desempenho e Eficiência</AccordionTrigger>
              <AccordionContent>
                Otimização de processos e identificação de áreas de melhoria com
                base em dados concretos e métricas de desempenho.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Competitividade e Inovação</AccordionTrigger>
              <AccordionContent>
                Capacidade de reagir rapidamente às mudanças do mercado e às
                demandas dos clientes, impulsionando a competitividade.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="bg-yellow-400 w-full rounded-none">
            SAIBA MAIS
          </Button>
        </Card>
        <Card className="min-w-[250px] max-w-[400px] bg-secondary dark:bg-primary-foreground border-2 border-cyan-400 rounded-lg">
          <div className="flex flex-col text-center md:text-start md:flex-row w-full h-36 justify-center items-center gap-6">
            <WorkflowIcon className="text-cyan-400 size-10 md:size-20" />
            <CardTitle className="w-full text-md md:w-1/2 md:text-2xl">
              Automações e RPA
            </CardTitle>
          </div>
          <CardHeader className="md:h-[207px]">
            Soluções de Automações e RPA (Automação Robótica de Processos)
            aumentam a eficiência operacional, reduzem erros humanos, aumento da
            produtividade, economia de custos, escalabilidade e liberação de
            funcionários para tarefas mais estratégicas e de maior valor
            agregado.
          </CardHeader>
          <Accordion type="single" collapsible className="p-6 mb-2">
            <AccordionItem value="item-1">
              <AccordionTrigger>Eficiência operacional</AccordionTrigger>
              <AccordionContent>
                Automatização de tarefas repetitivas e manuais, liberando
                recursos humanos para atividades mais estratégicas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Precisão e redução de Erros</AccordionTrigger>
              <AccordionContent>
                Eliminação de erros humanos em tarefas repetitivas, garantindo
                consistência e qualidade nos resultados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Economia de recursos</AccordionTrigger>
              <AccordionContent>
                Redução de custos operacionais ao automatizar processos,
                diminuindo a necessidade de mão de obra e minimização de
                retrabalho e correções de erros, economizando recursos
                financeiros e temporais
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="bg-cyan-400 w-full rounded-none">
            SAIBA MAIS
          </Button>
        </Card>
      </div>
    </div>
  )
}
