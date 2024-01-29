import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Incremental Static Regeneration Demo</h1>
      <ul>
        <li key="products">
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}
