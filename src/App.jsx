import { useEffect, useState } from "react";
import CartCalculate from "./components/CartCalculate";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Loader } from "lucide-react";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("All");
  const [cart, setCart] = useState([]);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("./db/product.json");
      const data = await res.json();
      setProducts(data.products);
      setCategory(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const hdlCallCategory = (cate) => {
    if (cate === "all") {
      setCategory(products);
    } else {
      let category = products.filter((el) => el.category === cate);
      setCategory(category);
    }
    setText(cate);
  };
  const hdlAddCart = (id, title, price) => {
    let idx = cart.findIndex((el) => el.id === id);
    if (idx === -1) {
      let newArr = [...cart, { id, title, price, quantity: 1 }];
      setCart(newArr);
    } else {
      const newArr = [...cart];
      newArr[idx].quantity += 1;
      setCart(newArr);
    }
  };
  const hdlRemoveNumber = (id, title, price) => {
    let idx = cart.findIndex((el) => el.id === id);
    if (cart[idx].quantity > 1) {
      const newArr = [...cart];
      newArr[idx].quantity -= 1;
      setCart(newArr);
    } else {
      const newArr = [...cart];
      newArr.splice(idx, 1);
      setCart(newArr);
    }
  };
  return (
    <div className="flex p-1 flex-col h-screen">
      <Header cart={cart} />
      {isLoading ? (
        <div className="flex gap-1 justify-center my-80">
          <Loader className="animate-spin" />
          <p>Your Data hasn't working!!!</p>
        </div>
      ) : (
        <div className="h-8/9 flex overflow-auto">
          <ProductList
            products={products}
            hdlCallCategory={hdlCallCategory}
            category={category}
            text={text}
            hdlAddCart={hdlAddCart}
          />
          <CartCalculate
            cart={cart}
            hdlRemoveNumber={hdlRemoveNumber}
            hdlAddCart={hdlAddCart}
          />
        </div>
      )}
    </div>
  );
}

export default App;
