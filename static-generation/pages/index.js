import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Next.js static generation</h1>
      <Link href="/users">Users</Link>
    </>
  );
}
