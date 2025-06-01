import BookList from '@/components/BookList'
import React from 'react'
import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants'
const page = () => {
  return (
    <>
    <form action={async () => {
        'use server'

        await signOut()
    } } className='mb-10'>
        <Button >
            Logout
        </Button>
    </form>

    <BookList 
    title="Popular Books"
    books={sampleBooks}
    containerClassName="mt-10"
    />
    </>
  )
}

export default page
