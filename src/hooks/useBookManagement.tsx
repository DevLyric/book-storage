import { useState } from "react";

const useBookManagement = () => {
  const [books, setBooks] = useState<string[]>([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return { books, addBook };
};

export default useBookManagement;
