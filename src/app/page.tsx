import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'

export default function Home () {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Hero />

      <Projects />
    </div>
  )
}
