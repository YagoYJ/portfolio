import { Button } from "@/components/ui/Button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog"
import { Input } from "./ui/Input"

import { type Project } from '@/lib/projects'
import { Eye, Github } from "lucide-react"
import Image from "next/image"

interface Props {
    project: Project
}

export function ProjectDetailsDialog({ project }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-xl flex flex-col items-center justify-start">
                <DialogHeader>
                    <DialogTitle>{project.name}</DialogTitle>
                </DialogHeader>

                <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start justify-start gap-2 w-1/2">
                        <p>{project.description}</p>
                        <div className="w-full h-[1px] bg-zinc-300" />
                    </div>

                    <Image
                        src={project.thumbnailUrl}
                        alt={`${project.name} thumbnail`}
                        className="w-1/2"
                    />
                </div>

                <DialogFooter>
                    <div className='w-full flex items-center justify-center gap-4 mt-10'>
                        <Button asChild variant="ghost" className='rounded-full w-full max-w-2xl border border-zinc-200'>
                            <a href={project.githubUrl} target='_blank' rel="noreferrer">
                                <Github className='mr-2' /> Github
                            </a>
                        </Button>

                        <Button asChild className='rounded-full w-full max-w-2xl'>
                            <a href={project.previewUrl} target='_blank' rel="noreferrer">
                                <Eye className='mr-2' /> Ver projeto
                            </a>
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
