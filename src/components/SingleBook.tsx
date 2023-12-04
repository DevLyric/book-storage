interface Props {
  title: string;
  description: string;
  price: number;
}

function SingleBook({ title, description, price }: Props) {
  return (
    <div className="rounded-xl shadow w-full max-w-xs cursor-pointer hover:scale-105 transition-all p-5">
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default SingleBook;
