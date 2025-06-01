import Header from '@/components/Header'
import { ReactNode } from 'react'
import { Toaster } from "@/components/ui/sonner"

const layout = ({children}: {children: ReactNode}) => {
  return <main className='root-container'>
    <div className='mx-auto max-w-7xl '>
            <Header />
    </div>
    <div className='mt-10 pb-20 '>
    {children}

   <Toaster />
    </div>
  </main>
}

export default layout
