import React from "react";
import Carosule from "../../Components/Carosule/Carosule";
import styled from "styled-components";
import { HorizantalLine, VerticalLine } from "../../Components/Lines/Line";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  ::after {
    content: "";
    position: absolute;

    width: 40%;
    height: 40%;
    background-size: contain;
    background-position: left;
    background: radial-gradient(
        74.36% 74.36% at 50% 50%,
        rgba(1, 23, 222, 0.4) 0%,
        rgba(3, 0, 153, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    filter: blur(100px);
  }
`;
const Line = styled.div`
  width: 60%;
  height: 100%;
  display: block;
  @media screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const CarosuleWrapper = styled.div`
  padding: 2rem 0rem;
`;

const Sixpage = () => {
  return (
    <>
      <HorizantalLine
        length="full"
        color="linear-gradient(180deg, #00FC65 0%, #00FC65 100%)"
      />
      <Container>
        <Line>
          <VerticalLine color="linear-gradient(180deg, #00FC65 0%, #7000FF 34.9%, #CD0C86 77.6%)" />
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              zIndex: "-99",
            }}
          >
            <h1>Technology</h1>
          </div>
        </Line>

        <CarosuleWrapper>
          <Carosule />
        </CarosuleWrapper>
        <Line>
          <VerticalLine color=" linear-gradient(180deg, #D60080 0%, #00FFFF 100%)" />
        </Line>
      </Container>
    </>
  );
};

export default Sixpage;
