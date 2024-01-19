import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product" legacyBehavior>
        <a>Products</a>
      </Link>
    </div>
  );
}
