import { useEffect } from "react";
import CartItem from "../components/CartItem"


const Cart = ({items, updateCart, deleteItem}) => {

  const totalPrice = items.reduce((acc, item) => {

    acc += item.price * item.quantity;
    return acc;
  }, 0)


  return (
    <ul className="flex flex-col gap-5 h-screen">
      {items.map((item) => (
        <CartItem  key={item.id} item={item} updateCart={updateCart} deleteItem={deleteItem}/>
      ))}
      <li className="flex justify-between text-[#e0f2fe] text-lg border-2 rounded-lg p-1">
        <span>Total:</span>
        <span className="underline underline-offset-4">${totalPrice}</span> 
      </li>
    </ul>
  )
}

export default Cart