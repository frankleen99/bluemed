import Hero from "../components/sections/Hero";
import Cards from "../components/sections/Cards";
import WhyChoose from "../components/sections/WhyChoose";
import PopularSpecialties from "../components/sections/PopularSpecialties";
import CTASection from "../components/sections/CTASection";



export default function Home() {
  return (
    <>
        <Hero />
        <Cards/>
       <WhyChoose/>
       <PopularSpecialties/>
       <CTASection/>
    </>
  );
}