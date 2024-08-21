import showQuantity from "../util/quantityList"

const CartItem = ({item, updateCart, deleteItem}) => {


  return (
    <li className="flex flex-col md:flex-row md:gap-16 bg-white p-4 rounded-lg">
        <p>Item: {item.title}</p>
        <p>Unit price: ${item.price}</p>
        <p>Quantity: 
            <select defaultValue={item.quantity} onChange={(e) => updateCart(item, e.target.value)}>
                {showQuantity()}
            </select>
        </p>
        <button className="bg-[#e9edc9] rounded-lg p-1 max-w-fit" onClick={() => deleteItem(item.id)}>Remove item</button>
    </li>
  )
}

export default CartItem