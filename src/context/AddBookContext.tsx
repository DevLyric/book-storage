import { createContext, useContext, useState } from "react";

interface AddBookContextProps {
  books: {
    title: string;
    description: string;
    price: string;
  }[];
  addBook: (newBook: {
    title: string;
    description: string;
    price: string;
  }) => void;
}

const AddBookContext = createContext<AddBookContextProps | undefined>(
  undefined
);

export const AddBookProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [books, setBooks] = useState<AddBookContextProps["books"]>([]);

  const addBook = (book: {
    title: string;
    description: string;
    price: string;
  }) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <AddBookContext.Provider value={{ books, addBook }}>
      {children}
    </AddBookContext.Provider>
  );
};

export const useAddBook = () => useContext(AddBookContext);
