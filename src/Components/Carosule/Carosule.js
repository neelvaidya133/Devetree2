import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { CardObj } from "./Data";
import style from "./style.css";
const Carosule = () => {
  return (
    <>
      <Carousel
        itemsToShow={3}
        pagination={true}
        itemsToScroll={3}
        breakPoints={[
          { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
          { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
          { width: 850, itemsToShow: 3 },
          { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
          { width: 1450, itemsToShow: 5 },
          { width: 1750, itemsToShow: 6 },
        ]}
      >
        {CardObj.map((item, index) => {
          return (
            <Card
              padding="0 2rem"
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default Carosule;

// -----------------------------------Card Component-----------------------------------/

const Card = (props) => {
  return (
    <>
      <Container>
        <Wrapper icon={props.icon}>
          <Icon padding={props.padding}>
            <img src={props.icon} alt="icon" />
          </Icon>
          <Title>
            <p>{props.title}</p>
          </Title>
          <Subtitle>
            <p>{props.subtitle}</p>
          </Subtitle>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0rem 1rem;
`;
const Wrapper = styled.div`
  padding: 1rem 1rem;
  background: linear-gradient(
    25.52deg,
    rgba(27, 0, 105, 0.2) -7.65%,
    rgba(27, 0, 105, 0) 104.52%
  );
  box-shadow: inset 0px 0px 40px 1px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  overflow: hidden;
  display: flex;

  flex-direction: column;
  ::after {
    padding: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('${(props) => props.icon}') no-repeat ;
    background-size: contain;
    z-index: -99;
    background-position: right -5rem bottom 0rem;
    filter: blur(5px);
  }
`;
const Icon = styled.div`
  display: flex;
  padding: ${(props) => props.padding};
`;
const Title = styled.div`
  padding: 0 2rem;
  p {
    margin: 0;
    background: linear-gradient(
      89.8deg,
      #49c9ee -2.92%,
      #641ed3 30.06%,
      #ab0bb3 54.64%,
      #d42d5d 79.23%,
      #f27425 102.01%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    line-height: 159.69%;
  }
`;
const Subtitle = styled.div`
  padding: 0 2rem 1rem 2rem;
  width: auto;
  p {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: rgba(255, 255, 255, 0.5);
  }
`;
