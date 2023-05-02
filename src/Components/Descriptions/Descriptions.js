import React from "react";
import { Container, Title, Brief } from "./DescriptionsStyle";

const Descriptions = (props) => {
  return (
    <>
      <Container>
        <Title>
          <h2>{props.Heading}</h2>
        </Title>
        <Brief>
          <p>{props.Text}</p>
        </Brief>
      </Container>
    </>
  );
};

export default Descriptions;
