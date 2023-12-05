import { useState } from "react";
import Form from "./Form";

function ShowForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="bg-black text-white rounded p-2 self-end"
      >
        adicionar livros
      </button>
      {showForm && <Form />}
    </>
  );
}

export default ShowForm;
