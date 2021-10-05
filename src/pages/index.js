import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer2 from "@/components/footer2";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import "swiper/swiper-bundle.min.css";

const HomeOne = () => {
  return (
    <MenuContextProvider>
        <Layout PageTitle="Arkana Capital">
          <HeaderOne />
          <Footer2/>
          <SliderOne />
        </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
