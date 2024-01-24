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
    paths: data
      .slice(0, 3)
      .map((post) => ({ params: { postId: `${post.id}` } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const req = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.postId
  );
  const data = await req.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
