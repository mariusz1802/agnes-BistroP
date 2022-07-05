import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ScrollUpBtn from "../components/ScrollUpBtn/ScrollUpBtn";
import AboutMe from "../components/AboutMe";
import Realizations from "../components/Realizations";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NoSSR from "react-no-ssr";

// markup
const IndexPage = () => {
  return (
    <>
      <Hero />
      <ScrollUpBtn />
      <AboutMe />
      <Realizations />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;
