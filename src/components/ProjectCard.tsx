'use client'
import Image from 'next/image'
import { Eye, Github } from 'lucide-react'
import { type Project } from '@/lib/projects'
import { Button } from './ui/Button'
import { ProjectDetailsDialog } from './ProjectDetailsDialog'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const isTruncated = project.description.length > 100
  const descriptionTruncated = isTruncated ? project.description.slice(0, 100) : project.description

  return (
    <div>
      <Image
        className='rounded-md'
        src={project.thumbnailUrl}
        alt={project.name}
        width={800}
        height={800}
      />

      <h3 className='mt-4 mb-3 text-xl leading-7 font-semibold'>{project.name}</h3>

      <p className='font-extralight h-[60px]'>
        {descriptionTruncated}
        {' '}
        {isTruncated && (
          <Button
            variant="link"
            className='underline cursor-pointer hover:text-identity transition-all'
          >
            ver mais
          </Button>
        )}
      </p>

      <ProjectDetailsDialog project={project} />
      <div className='w-full flex items-center justify-between gap-4 mt-10'>
        <Button asChild variant="ghost" className='rounded-full w-full border border-zinc-200'>
          <a href={project.githubUrl} target='_blank' rel="noreferrer">
            <Github className='mr-2' /> Github
          </a>
        </Button>

        <Button asChild className='rounded-full w-full'>
          <a href={project.previewUrl} target='_blank' rel="noreferrer">
            <Eye className='mr-2' /> Ver projeto
          </a>
        </Button>
      </div>
    </div>
  )
}
