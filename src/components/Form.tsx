import { useState } from "react";
import { useAddBook } from "../context/AddBookContext";

function Form() {
  const useBook = useAddBook();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const { title, description, price } = formData;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newBook = { title, description, price };
    useBook?.addBook(newBook);
    setFormData({ title: "", description: "", price: "" });
  };

  return (
    <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-5 rounded shadow-md"
      >
        <h1 className="text-xl">Preencha o formulário</h1>
        <div className="flex flex-col gap-2 my-3">
          <label htmlFor="">Título:</label>
          <input
            type="text"
            className="border rounded p-3"
            placeholder="Adicione um título."
            value={title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label htmlFor="">Descrição:</label>
          <input
            type="text"
            className="border rounded p-3"
            placeholder="Adicione uma descrição."
            value={description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label htmlFor="">Preço:</label>
          <input
            type="text"
            className="border rounded p-3"
            placeholder="Adicione um preço."
            value={price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
