export default function Product({ product }) {
  return (
    <main>
      <h1>
        {product.title} - {product.price}
      </h1>
      <p>{product.description}</p>
    </main>
  );
}

export async function getStaticPaths() {
  const req = await fetch("http://localhost:4000/products");
  const data = await req.json();
  return {
    paths: data.map((element) => ({
      params: { productId: `${element.id}` },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const req = await fetch("http://localhost:4000/products/" + productId);
  const data = await req.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
