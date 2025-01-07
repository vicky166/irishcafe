import About from "@/components/about";
import Navbar from "@/components/comman/navbar";
import Hero from "@/components/hero";
import Host from "@/components/host";
import Images from "@/components/images";
import Menu from "@/components/menu";
import Reviews from "@/components/reviews";
import Validity from "@/components/validity";
import Event from "@/components/event";
import Social from "@/components/social";
import Footer from "@/components/comman/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Host />
      <Images />
      <About />
      <Validity />
      <Menu />
      <Reviews />
      <Event />
      <Social />
      <Footer />
    </>
  );
}
