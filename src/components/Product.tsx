import { useState } from "react";
import showQuantity from "../util/quantityList"

const Product = ({product, addToCart}: any) => {

    const [quantity, setQuantity] = useState(1);

  return (
    <li className="bg-white rounded shadow-xl p-4">
        <img src={product.images[0]} alt={product.title} className="w-96 h-96"/>
        <h2 className="text-lg">{product.title}</h2>
        <p>${product.price}</p>
        <div className="flex justify-start gap-5">
            <select className="border-2 px-2 rounded-lg" onChange={(e) => setQuantity(e.target.value)}>
                {showQuantity()}
            </select>
            <button className="bg-green-600 text-white p-2 rounded-lg" onClick={() => addToCart(product, quantity)}>Add to the cart</button>
        </div>
    </li>
  )
}

export default Product