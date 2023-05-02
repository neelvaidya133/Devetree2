import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import ProductArch from "../../Assets/SecondPage/Group 27.svg";
import GooglePlay from "../../Assets/SecondPage/Group 30.svg";
import WebDevlopment from "../../Assets/SecondPage/Group 28.svg";
import DigitalMarket from "../../Assets/SecondPage/Group 29.svg";

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 0;
`;
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "2rem 0rem ",
          columnGap: "1rem",
          justifyContent: "center",
        }}
      >
        <LeftColumn>
          <Card
            padding="0"
            icon={ProductArch}
            title="Product architecture"
            subtitle="Design best fit architecture for the application and large scale software to provide best output."
          />
          <Card
            padding="0"
            icon={WebDevlopment}
            title="Web Development"
            subtitle="Best website and web application with latest 
          web framework solutions"
          />
        </LeftColumn>
        <RightColumn>
          <Card
            padding="0"
            icon={GooglePlay}
            title="Apps Development"
            subtitle="Develop application for 
          app Store and play Store
          to grow your business.
          "
          />
          <Card
            padding="0"
            icon={DigitalMarket}
            title="Digital Marketing"
            subtitle="Grow your product sales with social media marketing, SEO, and latest marketing strategies.     "
          />
        </RightColumn>
      </div>
    </>
  );
};

export default CardWrapper;
