import React from "react";
import { Header, Gallery, Footer } from "../components";
import Avatar from "../assets/profilePhoto.png";

const Main = () => {
  return (
    <>
      <Header
        avatar={Avatar}
        name={"Rodney Cotton"}
        location={"Helsinki, Finland"}
      />
      <Gallery />
      <Footer />
    </>
  );
};

export default Main;
