export default function Card({ item, hdlAddCart }) {
  return (
    <div className="w-1/1 flex p-3 justify-between items-center ring rounded-md shadow-md">
      <div className="w-30">
        <img
          className="h-30 w-full rounded-xl"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="w-5/8">
        <p className="font-bold mb-2">{item.title}</p>
        <p className="bg-gray-400 w-40 text-center px-2 py-1 rounded-2xl shadow-black">
          {item.category}
        </p>
        <p>{item.description}</p>
      </div>
      <button
        onClick={() => {
          hdlAddCart(item.id, item.title, item.price);
        }}
        className="px-2 py-4 cursor-pointer bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold ring rounded-2xl w-1/8"
      >
        Add to Cart
      </button>
    </div>
  );
}
