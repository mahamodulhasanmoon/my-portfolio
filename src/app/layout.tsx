
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/scss/index.scss'
import MainLayout from '@/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahamodul Hasan Moon | MERN Full Stack Developer - Portfolio and Projects',
  description: 'Mahamodul Hasan Moon is a skilled Full Stack Developer specializing in the MERN stack. Explore his portfolio and projects showcasing expertise in web development.',
  keywords: 'MERN, Full Stack Developer, Portfolio, Projects, Web Development', 
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <MainLayout/>
        {children}
        </>
      </body>
    </html>
  )
}
