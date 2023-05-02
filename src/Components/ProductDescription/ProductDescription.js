import React from "react";
import styled from "styled-components";
import Icon1 from "../../Assets/Icons/Product/1.svg";

const ProductDescription = (props) => {
  return (
    <>
      <Container>
        <Heading>
          <h3>{props.Heading}</h3>
          <Line>
            <L1 HeadlineColor={props.HeadlineColor}></L1>
            <L2 HeadlineColor={props.HeadlineColor}></L2>
            <L3 HeadlineColor={props.HeadlineColor}></L3>
            <L4 HeadlineColor={props.HeadlineColor}></L4>
          </Line>
        </Heading>

        <AppDescription>
          <ItemWrapper>
            <Icon>
              <img src={props.icon1} alt="icon1" />
            </Icon>
            <TextWrapper>
              <Title>
                <p>{props.titleText1}</p>
              </Title>
              <Brief>
                <p>{props.briefText1}</p>
              </Brief>
            </TextWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <Icon>
              <img src={props.icon2} alt="icon2" />
            </Icon>
            <TextWrapper>
              <Title>
                <p>{props.titleText2}</p>
              </Title>
              <Brief>
                <p>{props.briefText2}</p>
              </Brief>
            </TextWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <Icon>
              <img src={props.icon3} alt="icon3" />
            </Icon>
            <TextWrapper>
              <Title>
                <p>{props.titleText3}</p>
              </Title>
              <Brief>
                <p>{props.briefText3}</p>
              </Brief>
            </TextWrapper>
          </ItemWrapper>
        </AppDescription>
      </Container>
    </>
  );
};

export default ProductDescription;

// ==================== Stlyed Components ====================//

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
`;
export const Heading = styled.div`
  color: white;
  h3 {
    padding: 1rem 0rem;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;
export const L1 = styled.div`
  height: 10px;
  width: 75%;
  border-radius: 1rem;
  background: ${(props) => props.HeadlineColor};
`;
export const L2 = styled.div`
  background: ${(props) => props.HeadlineColor};
  height: 10px;
  width: 5%;
  border-radius: 1rem;
`;
export const L3 = styled.div`
  background: ${(props) => props.HeadlineColor};
  height: 10px;
  width: 5%;
  border-radius: 1rem;
`;
export const L4 = styled.div`
  background: ${(props) => props.HeadlineColor};
  height: 10px;
  width: 5%;
  border-radius: 1rem;
`;

export const AppDescription = styled.div``;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;
`;
export const Icon = styled.div`
  padding: 1rem 0rem;
`;
export const TextWrapper = styled.div`
  padding: 1rem;
`;
export const Title = styled.div`
  color: white;

  p {
    font-weight: 600;
  }
`;
export const Brief = styled.div`
  color: white;
  p {
    font-weight: 600;
    font-size: 0.75rem;
  }
`;
