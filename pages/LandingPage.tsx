import React from "react";
import Hero from "../components/Hero";
import Trust from "./Trust";
import { View, ScrollView } from "react-native";
import Reviews from "./Reviews";
import BannerPage from "./BannerPage";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <ScrollView>
      <Hero />
      <Trust />
      <Reviews/>
      <BannerPage/>
      <Footer/>
    </ScrollView>
  );
};

export default LandingPage;
