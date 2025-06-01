import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants/index";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
const Home =  async () => {
  const result = await db.select().from(users);
  console.log(result);
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