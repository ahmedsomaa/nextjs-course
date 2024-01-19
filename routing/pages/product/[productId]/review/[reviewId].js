import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  return (
    <h1>
      Review {router.query.reviewId} for product {router.query.productId}
    </h1>
  );
}
