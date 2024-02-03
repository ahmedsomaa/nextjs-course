export default function NewsArticlesList({ articles }) {
  return (
    <main>
      <h1>List of Article</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const req = await fetch("http://localhost:4000/news");
  const data = await req.json();

  return {
    props: {
      articles: data,
    },
  };
}
