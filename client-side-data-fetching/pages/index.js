import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <Link
          style={{
            color: "yellow",
            fontSize: "24px",
            textDecoration: "underline",
          }}
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          style={{
            color: "orange",
            fontSize: "24px",
            textDecoration: "underline",
          }}
          href="/products"
        >
          Products
        </Link>
      </div>
    </main>
  );
}
