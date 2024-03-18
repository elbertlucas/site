import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const color: any = {
  desenvolvimento: 'border-green-400',
  bi: 'border-yellow-400',
  rpa: 'border-cyan-400'
}

const projects = [{
  title: 'Projeto 1',
  subtitle: 'Bootstrap NestJS',
  category: 'desenvolvimento',
  technologies: ['React', 'NodeJS'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  assets: '',
  link_url: 'https://github.com/elbertlucas/api-google'
}, {
  title: 'Projeto 1',
  subtitle: 'Bootstrap NestJS',
  category: 'rpa',
  technologies: [],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  assets: '',
  link_url: '#'
}]

export function Projects() {
  return (
    <div id="projects" className="flex flex-col justify-center items-center gap-4 overscroll-contain py-[3rem]">
      <label className="w-2/3 text-2xl md:text-4xl font-semibold mb-4 text-center">Projetos</label>
      <div className="flex flex-wrap justify-center items-start w-full gap-4">
        {
          projects.map((project, index) => (
            <Card key={index} className={`min-w-[250px] max-w-[350px] border-2 rounded-md ${color[project.category]}`}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
                <CardDescription className="flex flex-wrap gap-1">
                  {project.technologies.map((technology, index) => (
                    <Badge className='my-1' key={index}>{technology}</Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {project.description}
              </CardContent>
              <CardFooter>
                <a className="w-full" href={project.link_url} target="_blank">
                  <Button
                    className="w-full"
                  >Acessar repositório</Button>
                </a>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div >
  )
}
