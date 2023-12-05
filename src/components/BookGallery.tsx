import { useAddBook } from "../context/AddBookContext";
import ShowForm from "./ShowForm";
import SingleBook from "./SingleBook";

function BookGallery() {
  const useBook = useAddBook();

  return (
    <main className="container mx-auto flex flex-col w-full p-5">
      <ShowForm />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
        {useBook && useBook.books.length > 0 ? (
          useBook.books.map((item, index) => (
            <SingleBook
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        ) : (
          <p>Adicione alguns livros</p>
        )}
      </div>
    </main>
  );
}

export default BookGallery;
