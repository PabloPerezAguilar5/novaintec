export const metadata = {
  title: "novaintec",
  description: "Soluções I.A",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Pricing from "@/components/Pricing";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
