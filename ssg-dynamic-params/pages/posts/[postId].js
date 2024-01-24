export default function Post({ post }) {
  return (
    <main>
      <h1>
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
    </main>
  );
}

export async function getStaticPaths() {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await req.json();
  return {
    paths: data.map((post) => ({ params: { postId: `${post.id}` } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const req = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.postId
  );
  const data = await req.json();
  return {
    props: {
      post: data,
    },
  };
}
