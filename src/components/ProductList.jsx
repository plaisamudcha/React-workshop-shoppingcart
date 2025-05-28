import Card from "./Card";

export default function ProductList({
  products,
  hdlCallCategory,
  category,
  text,
  hdlAddCart,
}) {
  const arrCategory = products.reduce((prev, curr) => {
    if (!prev.includes(curr.category)) {
      prev.push(curr.category);
    }
    return prev;
  }, []);
  return (
    <div className=" grow-1 w-2/3 overflow-auto h-full px-2">
      <p className="text-2xl mb-3">Products : {text}</p>
      <div className="flex justify-around mb-5">
        {arrCategory.map((el, index) => (
          <button
            className="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-md p-1.5 text-white font-bold cursor-pointer"
            key={index}
            onClick={() => {
              hdlCallCategory(el);
            }}
          >
            {el}
          </button>
        ))}
        <button
          onClick={() => {
            hdlCallCategory("all");
          }}
          className="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-md p-1.5 text-white font-bold cursor-pointer"
        >
          All
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {category.map((el, index) => (
          <Card key={index} item={el} hdlAddCart={hdlAddCart} />
        ))}
      </div>
    </div>
  );
}
