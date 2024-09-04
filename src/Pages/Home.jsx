import React from "react";
import NavBar from "../Components/Home/NavBar";
import Footer from "../Components/Home/Footer";
import CardContainer from "../Components/Home/CardContainer";

const Home = () => {
  return (
    <>
      <NavBar />
      <h3>Cartoon Blog</h3>
      <CardContainer />
      <Footer />
    </>
  );
};

export default Home;
