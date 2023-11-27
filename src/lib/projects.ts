import { type StaticImport } from 'next/dist/shared/lib/get-img-props'

import TaskImg from '@/assets/project-tasky.png'

export interface Project {
  id: string
  name: string
  thumbnailUrl: string | StaticImport
  description: string
  githubUrl: string
  previewUrl: string
}

export const projects: Project[] = [{
  id: 'tasky',
  name: 'Tasky',
  description: 'lorem ipsum dolor sit amet',
  githubUrl: 'https://github.com/YagoYJ/Tasky',
  previewUrl: 'https://linear.app/yagoyj/team/POR/active',
  thumbnailUrl: TaskImg
}, {
  id: 'tasky2',
  name: 'Tasky 2',
  description: 'lorem ipsum dolor sit amet 2',
  githubUrl: 'https://github.com/YagoYJ/Tasky',
  previewUrl: 'https://linear.app/yagoyj/team/POR/active',
  thumbnailUrl: TaskImg
}, {
  id: 'tasky3',
  name: 'Tasky 3',
  description: 'lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2 lorem ipsum dolor sit amet 2',
  githubUrl: 'https://github.com/YagoYJ/Tasky',
  previewUrl: 'https://linear.app/yagoyj/team/POR/active',
  thumbnailUrl: TaskImg

}]
