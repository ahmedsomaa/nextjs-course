import Footer from "@/components/Footer";

export default function About() {
  return <div className="content">About</div>;
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
