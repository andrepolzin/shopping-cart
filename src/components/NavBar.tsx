import { NavLink } from "react-router-dom"


export const NavBar = ({cartSize}) => {
  return (
    <header className="mb-5 text-[#e0f2fe]">
        <h1 className="text-5xl mb-5 ">Welcome to our online store</h1>
        <nav className="flex gap-4 tracking-wider text-lg">
            <NavLink to="/" className="hover:bg-stone-700 p-1 rounded">Products</NavLink>
            <NavLink to="/cart" className="hover:bg-stone-700 p-1 rounded">Shopping Cart {cartSize != 0 ? <sup className="text-yellow-200 text-md">({cartSize})</sup> : ''}</NavLink>
        </nav>   
    </header>
  )
}


