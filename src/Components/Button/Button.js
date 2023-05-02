import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <BTN>
        <button> Click me </button>
      </BTN>
    </>
  );
};

export default Button;

export const BTN = styled.div`
  button {
    font-size: 1rem;
    height: 50px;
    width: 200px;

    background-color: transparent;
    border: 1px solid black;
    border-radius: 50px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      transform: translateY(-1px);
    }
  }
`;
