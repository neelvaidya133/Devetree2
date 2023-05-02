import React from "react";
import styled from "styled-components";

const Vlin = styled.div`
  width: 5px;
  height: 100%;
  background: ${(props) => props.color};
`;

export const VerticalLine = (props) => {
  return (
    <>
      <Main
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
          }}
        ></div>
        <Vlin color={props.color}></Vlin>
        <div
          style={{
            width: "60%",
            height: "100%",
          }}
        ></div>
      </Main>
    </>
  );
};
export const Main = styled.div`
  display: block;
  @media screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Lin = styled.div`
  width: 73.8%;
  height: 5px;
  background: ${(props) => props.color};
  border-radius: 2px 0px;
`;
export const HorizantalLine = (props) => {
  if (props.length === "full") {
    return (
      <>
        <Container
          style={{
            padding: "0 5rem",
          }}
        >
          <div
            style={{
              width: "70.2%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Lin color={props.color}></Lin>
            <div
              style={{
                width: "29%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "30%",
            }}
          ></div>
        </Container>
      </>
    );
  } else if (props.length === "half") {
    return (
      <>
        <Container
          style={{
            padding: "0 5rem",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Lin2 color={props.color}></Lin2>
            <div
              style={{
                width: "35%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "50%",
            }}
          ></div>
        </Container>
      </>
    );
  }
};

export const Container = styled.div`
  display: block;
  @media screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Lin2 = styled.div`
  height: 5px;
  width: 60.3%;
  background: ${(props) => props.color};
  border-radius: 2px 0px;
`;
