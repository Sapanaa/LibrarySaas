import { Star } from 'lucide-react'
import { FaBookOpen } from "react-icons/fa"
import React from 'react'
import { Button } from './ui/button'
import BookCover from './BookCover'

interface Book {
  title: string
  author: string
  id: string
  genre: string
  rating: number
  total_copies: number
  available_copies: number
  description: string
  color: string
  cover: string
}

const BookOverview = ({
  title,
  author,
  id,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover
}: Book) => {
  return (
    <section className="flex flex-col xl:flex-row items-center gap-12 sm:gap-20 lg:gap-32  mx-auto px-4 py-8">
      {/* LEFT: Book Cover */}
      <div className="relative flex justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40">
            <BookCover
              variant="wide"
              className="z-0"
              coverColor={color}
              coverImage={cover}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: Book Info */}
      <div className="flex flex-col gap-6 max-w-xl text-white">
        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="flex flex-wrap gap-4 text-lg">
          <p>
            By <span className="font-semibold text-orange-500">{author}</span>
          </p>
          <p>
            Category: <span className="font-semibold text-orange-500">{genre}</span>
          </p>
          <p className="flex items-center gap-2">
            <Star size={18} />
            <span className="font-semibold text-orange-500">{rating}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-lg">
          <p>
            Total Books: <span className="font-semibold text-orange-500">{total_copies}</span>
          </p>
          <p>
            Available: <span className="font-semibold text-orange-500">{available_copies}</span>
          </p>
        </div>

        <p className="text-justify">{description}</p>

        <Button className="mt-4 flex items-center gap-2">
          <FaBookOpen />
          Borrow Book Request
        </Button>
      </div>
    </section>
  )
}

export default BookOverview
