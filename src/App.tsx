import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { useState } from "react";

export const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item: any, quantity: number) => {
    const currentCartItems = cart;
    const foundItem = currentCartItems.find(
      (eachItem) => eachItem.id == item.id
    );

    if (foundItem) {
      foundItem.quantity = +quantity;
      setCart([...currentCartItems]);
    } else {
      setCart([...cart, {...item, quantity: +quantity }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter(item => productId != item.id)
    setCart(newCart);
  };

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cartSize={cart.length}/>}>
        <Route index element={<Products addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart items={cart} updateCart={addToCart} deleteItem={removeFromCart}/>}
        />
      </Route>
    )
  );

  return (
    <div className="bg-[#b7b7a4] p-5">
      <RouterProvider router={appRouter} />
    </div>
  );
};


