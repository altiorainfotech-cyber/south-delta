import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { OurServices } from "@/components/OurServices";
import { OurExpertise } from "@/components/OurExpertise";
import { Gallery } from "@/components/Gallery";
import { Testimonial } from "@/components/Testimonial";
import { ServicesInCanada } from "@/components/ServicesInCanada";
import { GetToKnow } from "@/components/GetToKnow";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <OurExpertise />
      <Gallery />
      <Testimonial />
      <ServicesInCanada />
      <GetToKnow />
      <Footer />
    </main>
  );
}
