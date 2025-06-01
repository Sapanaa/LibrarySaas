'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaBookOpen } from "react-icons/fa";
const Header = () => {
    const pathname = usePathname();
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href={'/'} className='flex gap-1 items-center'>
      <FaBookOpen />
      <p>UniLib</p>
      </Link>
      <ul className='flex gap-5 flex-row items-center'>
    <li>
        <Link href={'/'} className={cn('text-base cursor-pointer capitalize ', pathname === '/' && 'text-red-400')}>Home</Link>       
    </li>
    <li>
        <Link href={'/about'} className={cn('text-base cursor-pointer capitalize ', pathname === '/about' && 'text-red-400')}>Search</Link>
    </li>
      </ul>
    </header>
  )
}

export default Header
