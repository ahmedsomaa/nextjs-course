import Head from "next/head";

export default function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Article title",
      description: "Article description",
    },
  };
}
