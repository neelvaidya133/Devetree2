import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 100;
  background: ${(props) => props.NavColor};
  justify-content: space-around;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    color: white;
    font-size: 30px;
    line-height: 53px;
    font-weight: 400;
    font-family: "Pacifico", cursive;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  color: white;
  a {
    font-family: "Poppins";

    margin: 0 0.5rem;
    font-style: normal;
    text-decoration: none;
    color: white;

    font-size: 20px;
    line-height: 30px;
  }
  .activeStyle {
    border-color: transparent;
    border-bottom: 5px solid transparent;
    border-radius: 20px;

    border-image: linear-gradient(
        270deg,
        #4db3eb -26.32%,
        #5b5bdd 0.73%,
        #8017c7 29.47%,
        #b211a5 61.59%,
        #da3a53 97.93%,
        #ed682f 135.96%
      )
      1;
  }
`;

export const Button = styled.div``;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: fixed;
    justify-content: center;
    z-index: 100;
    display: ${(props) => (props.mobile ? "flex" : "none")};
    width: 100%;
    background-color: #050216;
    /* justify-content: center; */
    top: 45px;
    height: 40%;
    transition: all 0.5s ease;
  }
`;
export const Icon = styled.div`
  display: none;

  height: 40px;
  width: 40px;
  position: absolute;
  left: 25px;
  top: 5%;
  color: rgba(255, 255, 255, 0.7);
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    width: 100%;
    background-color: #050216;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    height: 50px;
    transform: translateY(0);
  }
`;

export const MenuItems = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  a {
    color: white;
    text-decoration: none;
    margin: 10px 0;
  }
  .activeStyle {
    border-color: transparent;
    border-bottom: 5px solid transparent;
    border-radius: 20px;

    border-image: linear-gradient(
        270deg,
        #4db3eb -26.32%,
        #5b5bdd 0.73%,
        #8017c7 29.47%,
        #b211a5 61.59%,
        #da3a53 97.93%,
        #ed682f 135.96%
      )
      1;
  }
`;
