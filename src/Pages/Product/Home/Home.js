import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../../Constant/global";
import Back from "../../../Assets/Group 85.svg";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Contain>
        <h1>PRODUCT</h1>
      </Contain>
      <div
        style={{
          padding: "0 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Line
            style={{
              height: "200px",
              width: "5px",
              background: "linear-gradient(180deg, #2E2AA5 0%, #2400FF 100%)",
            }}
          ></Line>
        </div>
      </div>
    </>
  );
};

export default Home;

// ==================== Stlyed Components ====================//

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  justify-content: center;
  align-items: center;
  background-color: #050216;
  background-image: url("${Back}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 107%;

  height: 100vh;
  padding: 0 10%;

  p {
    text-align: center;

    line-height: 30px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
  h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;

    font-weight: 800;
    line-height: 156.69%;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200%;
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: #fff;
    text-fill-color: transparent;
    fill: none;
  }
  /* @keyframes updownA {
    0% {
      transform: translateY(0);

    }
    25% {
      transform: translateY(-5%);
    }
    50% {
      transform: translateY(-10%);
    }
    75% {
      transform: translateY(-5%);}
    100% {
      transform: translateY(0);
    }
  }
  @keyframes updownB {
    0% {
      transform: translateY(0);

    }
    50% {
      transform: translateY(-15%);
    }
    100% {
      transform: translateY(0);
    }
  } */
`;

export const Journey = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  h3 {
    text-align: center;
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
    background-size: 200%;
    animation: shine 5s linear infinite;

    @keyframes shine {
      to {
        background-position: 200% 0;
      }
    }
  }
`;
export const Line = styled.div`
  width: 5px;
  height: 200px;

  background: linear-gradient(180deg, #2e2aa5 0%, #2400ff 100%);
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
