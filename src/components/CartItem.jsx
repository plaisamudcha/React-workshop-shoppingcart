export default function CartItem({ item, hdlAddCart, hdlRemoveNumber }) {
  return (
    <div className="flex justify-between pl-2">
      <p className="w-4/8">{item.title.split(" ").slice(0, 2).join(" ")}</p>
      <div className="w-2/8 flex">
        <button
          className="inset-shadow-sm inset-shadow-indigo-500/50 w-10 bg-indigo-100 mr-1 text-black flex justify-center items-center"
          onClick={() => {
            hdlRemoveNumber(item.id, item.title, item.price);
          }}
        >
          -
        </button>
        <button
          className="inset-shadow-sm inset-shadow-indigo-500/50 w-10 bg-indigo-100 text-black flex justify-center items-center"
          onClick={() => {
            hdlAddCart(item.id, item.title, item.price);
          }}
        >
          +
        </button>
      </div>
      <p className=" flex w-2/8 justify-end">
        {item.quantity}*${item.price.toFixed(2)}
      </p>
    </div>
  );
}
