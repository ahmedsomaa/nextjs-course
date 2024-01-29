import Link from "next/link";

export default function ProductsList({ products }) {
  return (
    <div>
      <h1>List of Products</h1>
      <ol>
        {products.map(({ id, title, price, description }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>
              <h2>
                {title} - {price}
              </h2>
            </Link>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("http://localhost:4000/products");
  const data = await req.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
