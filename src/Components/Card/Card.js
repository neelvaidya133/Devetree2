import React from "react";
import styled from "styled-components";
import ReactIcon from "../../Assets/Carousale/science (1) 2.svg";

const Card = (props) => {
  return (
    <>
      <Container>
        <Wrapper>
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

export default Card;

const Container = styled.div``;
const Wrapper = styled.div`
  margin-bottom: 20px;
  max-width: 300px;

  background: linear-gradient(
    25.52deg,
    rgba(27, 0, 105, 0.2) -7.65%,
    rgba(27, 0, 105, 0) 104.52%
  );
  box-shadow: inset 0px 0px 40px 1px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  display: flex;
  flex-direction: column;
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
