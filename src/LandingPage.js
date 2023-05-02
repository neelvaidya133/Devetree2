import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";

import Third from "./Pages/ThirdPage/Third";

import { PageTwo, PageThree, PageFour, PageFive } from "./PageData/PageData";
import CardWrapper from "./Components/CardWrapper/CardWrapper";
import ImageWrapper from "./Components/ImageWrapper/ImageWrapper";

import Sixpage from "./Pages/SixPage/Sixpage";
import Footer from "./Pages/Footer/Footer";
import Descriptions from "./Components/Descriptions/Descriptions";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Home />

      <Third
        {...PageTwo}
        width="100%"
        children={<CardWrapper />}
        children2={
          <Descriptions Heading={PageTwo.Heading} Text={PageTwo.Text} />
        }
      />
      <Third
        {...PageThree}
        width="70%"
        children={<ImageWrapper Image={PageThree.Image} />}
        children2={
          <Descriptions Heading={PageThree.Heading} Text={PageThree.Text} />
        }
      />
      <Third
        {...PageFour}
        width="70%"
        children={<ImageWrapper Image={PageFour.Image} />}
        children2={
          <Descriptions Heading={PageFour.Heading} Text={PageFour.Text} />
        }
      />
      <Third
        {...PageFive}
        width="70%"
        children={<ImageWrapper Image={PageFive.Image} />}
        children2={
          <Descriptions Heading={PageFive.Heading} Text={PageFive.Text} />
        }
      />
      <Sixpage />
      <Footer />
    </>
  );
};

export default App;
