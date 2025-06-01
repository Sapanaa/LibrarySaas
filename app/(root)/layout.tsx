import Header from '@/components/Header'
import { ReactNode } from 'react'
import { Toaster } from "@/components/ui/sonner"
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const layout = async({children}: {children: ReactNode}) => {
  const session = await auth();

  if(!session) redirect('/sign-in');
  return <main className='root-container'>
    <div className='mx-auto max-w-7xl '>
            <Header session={session} />
    </div>
    <div className='mt-10 pb-20 '>
    {children}

   <Toaster />
    </div>
  </main>
}

export default layout
