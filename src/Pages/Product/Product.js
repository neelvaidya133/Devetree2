import React, { useEffect } from "react";
import Home from "./Home/Home";
import Third from "../ThirdPage/Third";
import { PageFour, PageThree, PageTwo } from "../../PageData/ProductPage";
import ImageWrapper from "../../Components/ImageWrapper/ImageWrapper";
import ProductDescription from "../../Components/ProductDescription/ProductDescription";
import Footer from "../../Pages/Footer/Footer";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Home />
      <Third
        {...PageTwo}
        width="70%"
        children={<ImageWrapper Image={PageTwo.Image} />}
        children2={<ProductDescription {...PageTwo} />}
      />
      <Third
        {...PageThree}
        width="70%"
        children={<ImageWrapper Image={PageThree.Image} />}
        children2={<ProductDescription {...PageThree} />}
      />
      <Third
        {...PageFour}
        width="70%"
        children={<ImageWrapper Image={PageFour.Image} />}
        children2={<ProductDescription {...PageFour} />}
      />
      <Footer />
    </>
  );
};

export default Product;
