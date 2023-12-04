import { useState } from "react";
import SingleBook from "./SingleBook";

function BookGallery() {
  const [showBookList, setShowBookList] = useState(false);

  const booksArray = [
    {
      id: 1,
      title: "Meu pequeno poney",
      description: "Este é o primeiro a ser exibido",
      price: 50,
    },
    {
      id: 1,
      title: "Meu pequeno poney",
      description: "Este é o primeiro a ser exibido",
      price: 50,
    },
    {
      id: 1,
      title: "Meu pequeno poney",
      description: "Este é o primeiro a ser exibido",
      price: 50,
    },
  ];

  return (
    <main className="container mx-auto flex flex-col w-full p-5">
      <button
        onClick={() => setShowBookList(true)}
        className="bg-black text-white rounded p-2 self-end"
      >
        adicionar livros
      </button>

      {showBookList && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
          {booksArray.map((item, index) => {
            return (
              <SingleBook
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}

export default BookGallery;
