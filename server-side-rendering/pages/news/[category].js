export default function ArticlesByCategory({ category, articles }) {
  return (
    <main>
      <h1>Articles by {category}</h1>
      {articles.map(({ id, title, description }) => (
        <div key={id}>
          <h2>
            {id} - {title}
          </h2>
          <p>{description}</p>
          <hr />
          <br />
        </div>
      ))}
    </main>
  );
}

export async function getServerSideProps({ params, query }) {
  const { category } = params;
  const req = await fetch("http://localhost:4000/news/?category=" + category);
  const data = await req.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
