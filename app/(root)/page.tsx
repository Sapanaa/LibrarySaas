import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants/index";
const Home = () => {
  return (
    <>
    <BookOverview   {...sampleBooks[0]}/>
    <BookList 
    title="Popular Books"
    books={sampleBooks}
    containerClassName="mt-10"
    />
    </>
  );
}


export default Home