import './globals.css'
import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'
import Header from "@/app/component/Header";

export const metadata : Metadata = {
  title: 'Tourlist',
  description: 'Generated by create next app',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
