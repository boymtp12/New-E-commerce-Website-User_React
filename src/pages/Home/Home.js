import React from "react";
import Hero from "./Hero";
import FeatureProducts from "./FeatureProducts";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import useTitle from "../../Hooks/useTitle";
import CategoryMenu from "./CategoryMenu";

const Home = () => {
  useTitle("Home");
  return (
    <main>
      <Hero />
      <CategoryMenu />
      <FeatureProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default Home;
