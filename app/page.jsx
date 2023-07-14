import Main from "@/components/landingPage/Main";
import Introduction from "@/components/introduction/Introduction";
import Testimonials from "@/components/testimonials/Testimonials";
import Features from "@/components/features/Features";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

function Home() {
  return (
    <>
      <Main />
      <Introduction />
      <Testimonials />
      <Features />
      <About />
      <Footer />
    </>
  );
}

export default Home;
