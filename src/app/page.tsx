import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Product from "@/components/products";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
export default function HomePage() {
  return (
    <main >
      <Navbar />
      <Home />
      <Product />
      <Testimonials />
      <Faq />
      <Footer />

  

      {/* Other sections will go here later */}
    </main>
  );
}

