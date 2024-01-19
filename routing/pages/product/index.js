import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <Link legacyBehavior href="/product/1">
        <a>Product 1</a>
      </Link>
      <Link legacyBehavior href="/product/2">
        <a>Product 2</a>
      </Link>
      <Link legacyBehavior href="/product/3">
        <a>Product 3</a>
      </Link>
      <Link legacyBehavior href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
