import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yago Juan Dev',
  description: "I'm a Full Stack developer"
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen flex flex-col items-center justify-center'>
          <div className='w-full max-w-5xl'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
