import * as React from "react";
import NoSSR from "react-no-ssr";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ScrollUpBtn from "../components/ScrollUpBtn/ScrollUpBtn";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import HowMuch from "../components/HowMuch/HowMuch";
import ContentWrapper from "../components/Form/ContentWrapper";
// markup
const IndexPage = () => {
  return (
    <NoSSR>
      <Layout>
        <Hero />
        <ScrollUpBtn />
        <ContentWrapper>
          <HowItWorks />
          <Stats />
          <HowMuch />
        </ContentWrapper>
        <Footer />
      </Layout>
    </NoSSR>
  );
};

export default IndexPage;
