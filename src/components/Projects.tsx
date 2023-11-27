import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function Projects () {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-around'>
        <header>
            <h2 className="text-3xl">Meus projetos</h2>
        </header>

        <main className="grid grid-cols-3 gap-10">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </main>
    </section>
  )
}
