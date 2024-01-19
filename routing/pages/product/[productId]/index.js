import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  return <h1>Details about product {router.query.productId}</h1>;
}
