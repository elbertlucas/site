'use client'
import { bgColor, borderColor } from '@/lib/utils'
import { IProject, IRepo, api } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import Image from 'next/image'
import ProjectGif from '../app/job.gif'

export function Projects() {
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    api.get<IRepo[]>('elbertlucas/repos').then((result) => {
      const repos = result.data
      const output: IProject[] = []
      for (const repo of repos) {
        const topics = repo.topics.filter(
          (topics) =>
            topics == 'development' ||
            topics == 'data' ||
            topics == 'automation',
        )
        const project: IProject = {
          title: repo.name,
          subtitle: repo.description,
          category: topics[0],
          technologies: repo.topics,
          description: repo.description,
          repo_url: repo.html_url,
          link_url: repo.homepage,
        }
        if (topics.length > 0) output.push(project)
      }
      setProjects(output)
    })
  }, [])

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center gap-4 overscroll-contain"
    >
      <div className="flex flex-wrap justify-center items-start w-full gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`flex flex-col justify-between border-2 bg-secondary dark:bg-primary-foreground rounded-md ${borderColor[project.category]}`}
          >
            <CardContent>
              <CardTitle className="mt-4 mb-8 font-bold text-3xl">
                {project.title}
              </CardTitle>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((technology, index) => (
                  <Badge
                    className={`mb-2 rounded-md px-3 ${bgColor[project.category]} font-semibold text-md`}
                    key={index}
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col w-full p-2 justify-center items-center gap-4">
                <span className="font-semibold px-8 max-w-96 text-center">
                  {project.description}
                </span>
                <Image
                  src={ProjectGif}
                  className="w-full"
                  alt="Picture of the author"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <a className="w-full" href={project.repo_url} target="_blank">
                <Button className="w-full">Acessar repositório</Button>
              </a>
              {project.link_url && (
                <a className="w-full" href={project.link_url} target="_blank">
                  <Button className="w-full">Acessar site</Button>
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
