import { Chrome, ShoppingCart } from "lucide-react";

export default function Header({ cart }) {
  return (
    <div className="flex justify-between px-7 h-1/9 items-center">
      <div className="flex items-center gap-4">
        <p>
          <Chrome size={64} />
        </p>
        <p className="text-3xl font-bold">PoRPaI Shopping</p>
      </div>
      <div className="relatve">
        <ShoppingCart size={64} />
        <p className="absolute w-8 h-8 rounded-3xl bg-red-500 flex items-center justify-center p-3 text-white top-5 right-5">
          {cart.length}
        </p>
      </div>
    </div>
  );
}
