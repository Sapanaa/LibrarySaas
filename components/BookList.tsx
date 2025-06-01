import React from 'react'
import BookCard from './BookCard';

interface Props {
    title: string;
    books: Book[];
    containerClassName?: string
}
const BookList = ({title ,books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
        <h1>  Popular Books</h1>
        <ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5 gap-6'>
            {books.map((book) => (
                <BookCard key={book.title} {...book} />
            ))}
        </ul>
    </section>
  )
}

export default BookList
