import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductsList({ products }) {
  const router = useRouter();
  const [productsList, setProductsList] = useState(products);

  const onJewelryButtonClick = async () => {
    const req = await fetch("http://localhost:4000/products?category=jewelery");
    const data = await req.json();
    setProductsList(data);
    router.push("/products?category=jewelery", undefined, { shallow: true });
  };

  return (
    <main>
      <h2>Filters</h2>
      <div>
        <button onClick={onJewelryButtonClick}>Jewelry</button>
      </div>
      <br />
      <br />
      <h2>Products</h2>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <h3>
              {product.title} @ ${product.price}
            </h3>
            <h4 style={{ textTransform: "uppercase" }}>{product.category}</h4>
            <p style={{ textAlign: "justify" }}>{product.description}</p>
            <hr />
            <br />
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const { category } = query;
  const queryString = category ? "category=jewelery" : "";

  const req = await fetch("http://localhost:4000/products?" + queryString);
  const data = await req.json();

  return {
    props: {
      products: data,
    },
  };
}
