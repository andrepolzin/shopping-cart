import { useEffect, useState } from "react";
import Product from "../components/Product";
import Modal from "../components/Modal";

const API_BASE_URL = "https://dummyjson.com";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
          throw new Error("An error occurred fetching products! Try again ;)");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul className="flex flex-wrap justify-between gap-10">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart} open={open} setOpen={setOpen}/>
        ))}
      </ul>
      <Modal />
    </>
  );
};

export default Products;
