import React from "react";
import styled from "styled-components";
import Descriptions from "../../Components/Descriptions/Descriptions";
import Blur from "../../Assets/Glow/2.svg";
import Back from "../../Assets/Creative Solution.png";
import {
  HorizantalLine,
  HorizantalLineFull,
  HorizantalLineHalf,
  VerticalLine,
} from "../../Components/Lines/Line";

export const Container = styled.div`
  width: 100%;
  position: relative;
  @media screen {
    @media (min-width: 800px) {
      margin-bottom: 0;
    }
  }
`;

export const Section = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  row-gap: 2rem;

  @media screen {
    @media (min-width: 800px) {
      padding: 0 100px;
      display: flex;
      justify-content: center;
      /* column-gap: 2rem; */
      /* align-items: baseline; */
      flex-direction: ${(props) => (props.imgStart ? "row-reverse" : "row")};
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  width: 95%;

  @media screen and (min-width: 800px) {
    width: 100%;
  }
`;
export const Info = styled.div`
  display: flex;
  flex: 2;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${`url('${Blur}') 50% 50% no-repeat`};
    background-repeat: no-repeat;
  } */
`;
export const Upper = styled.div`
  display: flex;

  background: linear-gradient(180deg, #00f0ff 0%, #fff500 100%);
  justify-content: center;
  align-items: center;
`;
export const Middle = styled.div`
  display: flex;
  justify-content: center;
`;
export const Lower = styled.div`
  display: flex;
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 0;
`;
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  height: 200px;
  width: 5px;
  background: linear-gradient(180deg, #fff500 0%, #2400ff 100%);
  border-radius: 0px 2px 0px 0px;
  background-size: 200% 200%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
`;

const Third = (props) => {
  return (
    <>
      <HorizantalLine length={props.length} color={props.HorizantalLineColor} />
      <Container>
        <Section imgStart={props.imgStart}>
          <Left>
            <ImageWrapper width={props.width}>{props.children}</ImageWrapper>
          </Left>
          <Left>
            <InfoWrapper>
              <VerticalLine color={props.color1} />
              <Info
                style={{
                  display: "flex",
                  flex: 2,
                }}
              >
                {props.children2}
              </Info>
              <VerticalLine color={props.color2} />
            </InfoWrapper>
          </Left>
        </Section>
      </Container>
    </>
  );
};

export default Third;
