import CartItem from "./CartItem";

export default function CartCalculate({ cart, hdlAddCart, hdlRemoveNumber }) {
  const itemPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const tax = itemPrice * 0.07;
  const shipping = itemPrice * 0;
  const total = itemPrice + tax + shipping;
  return (
    <div className=" w-1/3 overflow-auto p-2 text-2xl">
      <p>Cart Item</p>
      <div className="flex flex-col gap-2 mb-3">
        {cart.map((el, index) => (
          <CartItem
            key={index}
            item={el}
            hdlAddCart={hdlAddCart}
            hdlRemoveNumber={hdlRemoveNumber}
          />
        ))}
      </div>
      <hr className="mb-3" />
      {cart.length !== 0 && (
        <div>
          <div className="flex justify-between pl-2">
            <p>Item Price</p>
            <p>${itemPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between pl-2">
            <p>Tax</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between pl-2">
            <p>Shipping</p>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between pl-2">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
