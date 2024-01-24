import Link from "next/link";

export default function PostsList({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ol>
        {posts.map((post) => (
          <Link key={post.id} href={"posts/" + post.id} passHref>
            <li>
              <span>{post.id}</span> - {post.title}
              <hr />
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await req.json();
  return {
    props: {
      posts: data,
    },
  };
}
