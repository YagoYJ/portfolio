import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'

import HeroImg from '@/assets/hero-img.png'
import { Button } from './ui/Button'

export function Hero () {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-around'>
        <header className='w-full flex items-start justify-center gap-5'>
            <Link href="#projects" className='border-b-2 border-background hover:border-identity transition-all'>Projetos</Link>
            <Link href="#skills" className='border-b-2 border-background hover:border-identity transition-all'>Skills</Link>
            <Link href="#about" className='border-b-2 border-background hover:border-identity transition-all'>Sobre mim</Link>
        </header>

        <main className='w-full flex items-start justify-between'>
            <div>
                <h1 className='text-5xl font-bold mb-1'>
                    Eai! Eu sou o <span className='text-identity'>Yago Juan</span>
                </h1>
                <h2 className='text-3xl font-bold mb-1'>
                    Desenvolvedor <span className='text-identity'>Full Stack</span>
                </h2>
                <h3 className='font-light'>
                    Transformo ideias em realidade virtual
                </h3>
                <div className='flex items-center justify-start mt-4 gap-5'>
                    <Link href="https://github.com/YagoYJ" target='_blank'>
                        <Github className='hover:text-identity transition-all' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yagoyj/" target='_blank'>
                        <Linkedin className='hover:text-identity transition-all' />
                    </Link>
                </div>
            </div>

            <div>
                <Image src={HeroImg} alt="Yago Juan" />
            </div>
        </main>

        <Button className='rounded-full font-bold min-w-[250px]'>Ver mais</Button>
    </section>
  )
}
