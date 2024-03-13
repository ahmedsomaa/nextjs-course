import Head from "next/head";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
