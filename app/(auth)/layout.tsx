import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const Layout = async  ({ children }: { children: ReactNode }) => {
  const session = await auth()

  if(session) redirect('/')
  return (
    <main className="relative flex min-h-screen flex-col text-light-100 sm:flex-row">
      <section className="flex flex-1 items-center justify-center bg-pattern bg-cover bg-top px-5 py-10">
        <div className="gradient-vertical mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10 bg-dark-100 w-full">
          <h2 className="text-3xl font-bold text-white text-center">UniLib</h2>
          {children}
        </div>
      </section>
    </main>
  )
}

export default Layout
