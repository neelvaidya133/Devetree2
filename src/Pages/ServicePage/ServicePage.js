import React, { useEffect } from "react";
import Home from "./Home";
import Processor from "../../Assets/Icons/Processor.svg";
import styled from "styled-components";
import Third from "../ThirdPage/Third";
import { HorizantalLine, VerticalLine } from "../../Components/Lines/Line";
import { PageTwo } from "../../PageData/ServicePage";
import ImageWrapper from "../../Components/ImageWrapper/ImageWrapper";
import Descriptions from "../../Components/Descriptions/Descriptions";
const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Home />
      <HorizantalLine
        length="half"
        color="linear-gradient(90deg, #02F0FF 0%, #2300FF 100%)"
      />
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            height: "5rem",
            width: "60%",
          }}
        >
          <VerticalLine color="linear-gradient(180deg, #03F0FF 0%, #00F0FF 100%)" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card
          title="Product Architecture "
          subtitle=" A type of consulting or professional service that helps organizations design and develop the product architecture for their products. This may involve conducting market research, gathering requirements, creating prototypes, and developing detailed design specifications. "
          icon={Processor}
        />
        <Card
          title="Product Architecture "
          subtitle=" A type of consulting or professional service that helps organizations design and develop the product architecture for their products. This may involve conducting market research, gathering requirements, creating prototypes, and developing detailed design specifications. "
          icon={Processor}
        />
        <Card
          title="Product Architecture "
          subtitle=" A type of consulting or professional service that helps organizations design and develop the product architecture for their products. This may involve conducting market research, gathering requirements, creating prototypes, and developing detailed design specifications. "
          icon={Processor}
        />
        <Card
          title="Product Architecture "
          subtitle=" A type of consulting or professional service that helps organizations design and develop the product architecture for their products. This may involve conducting market research, gathering requirements, creating prototypes, and developing detailed design specifications. "
          icon={Processor}
        />
        <Card
          title="Product Architecture "
          subtitle=" A type of consulting or professional service that helps organizations design and develop the product architecture for their products. This may involve conducting market research, gathering requirements, creating prototypes, and developing detailed design specifications. "
          icon={Processor}
        />
        <Card
          title="Product Architecture "
          subtitle=" A type of consulting or professional service that helps organizations design and develop the product architecture for their products. This may involve conducting market research, gathering requirements, creating prototypes, and developing detailed design specifications. "
          icon={Processor}
        />
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            height: "5rem",
            width: "60%",
          }}
        >
          <VerticalLine color="linear-gradient(180deg, #00F0FF 0%, #FFF500 100%)" />
        </div>
      </div>

      <Third
        {...PageTwo}
        width="70%"
        children={<ImageWrapper Image={PageTwo.Image} />}
        children2={
          <Descriptions Heading={PageTwo.Heading} Text={PageTwo.Text} />
        }
      />
    </>
  );
};

export default ServicePage;

const Card = (props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Icon>
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
  padding: 1rem;
`;
const Wrapper = styled.div`
  margin-bottom: 20px;
  max-width: 400px;

  background: linear-gradient(
    25.52deg,
    rgba(27, 0, 105, 0.2) -7.65%,
    rgba(27, 0, 105, 0) 104.52%
  );
  box-shadow: inset 0px 0px 40px 1px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Icon = styled.div`
  display: flex;

  padding: 30px 40px;
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
    font-size: 16px;

    color: rgba(255, 255, 255, 0.5);
  }
`;
