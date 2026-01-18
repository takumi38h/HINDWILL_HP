import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NewsBar } from "@/components/sections/NewsBar";
import { Mission } from "@/components/sections/Mission";
import { Feature } from "@/components/sections/Feature";
import { ServiceList } from "@/components/sections/ServiceList";
import { Blog } from "@/components/sections/Blog";
import { CompanyRecruit } from "@/components/sections/CompanyRecruit";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <NewsBar />
        <Mission />
        <Feature />
        <ServiceList />
        <Blog />
        <CompanyRecruit />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
