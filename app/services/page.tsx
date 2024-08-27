import { Header } from '@/components/header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { MonitorCheckIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 from-20% via-slate-100 via-20% to-slate-200 to-90% dark:bg-gradient-to-br dark:from-slate-950 dark:from-10% dark:via-slate-900 dark:via-50% dark:to-slate-950 dark:to-90%">
      <Header />
      <div className="w-screen h-screen flex justify-center items-center">
        <Carousel className="w-[80%]">
          <CarouselContent>
            <CarouselItem key={1}>
              <Card>
                <CardContent className="flex flex-col w-full h-[700px] items-center border-1 bg-secondary dark:bg-primary-foreground dark:shadow-xl border-green-400 rounded-lg">
                  <div className="grid grid-cols-2 justify-center items-center">
                    <div className="flex flex-col gap-2 p-16 ">
                      <h2 className="text-4xl font-bold">
                        Desenvolvimento inteligente de Software
                      </h2>
                      <span className="text-md font-semibold text-slate-300">
                        Software sob medida para pequenas e médias empresas que
                        desejam transformar e agilizar seus processos de
                        negócios.
                      </span>
                    </div>
                    <MonitorCheckIcon className="text-green-400 size-96 p-16" />
                  </div>
                  <Accordion type="single" collapsible className="p-6 mb-2">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Foco no que importa</AccordionTrigger>
                      <AccordionContent>
                        Seu software não será apenas fácil de usar, vamos nos
                        assegurar de que as pessoas gostem de usá-lo. Vamos
                        trabalhar juntos para tornar as coisas simples, não
                        importa quão complexo seja seu negócio.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Entrega descomplicada</AccordionTrigger>
                      <AccordionContent>
                        Seu projeto será construído de forma ágil, utilizando
                        scrum entregamos software funcionando a cada duas
                        semanas. E você receberá sempre uma atualização do
                        progresso.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Sem contratempos</AccordionTrigger>
                      <AccordionContent>
                        Trabalhamos cobertura de testes automatizados. Cada
                        recurso e função do seu software estará testado à
                        exaustão garantindo qualidade e evitando retrabalho.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Button className="bg-green-400 w-full rounded-none">
                    SAIBA MAIS
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}
