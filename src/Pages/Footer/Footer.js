import React from "react";
import styled from "styled-components";
// ========================= Icons =========================//
import LinkedIn from "../../Assets/Icons/LinkedIn 2.svg";
import Instagram from "../../Assets/Icons/Instagram.svg";
import Googlemap from "../../Assets/Icons/Google Maps Old.svg";
import Github from "../../Assets/Icons/GitHub.svg";
import Email from "../../Assets/Icons/Secured Letter.svg";
import Phone from "../../Assets/Icons/Phone.svg";
import Location from "../../Assets/Icons/Location.svg";
// ========================= Icons =========================//

const Footer = () => {
  return (
    <>
      <Container>
        <Line>
          <HorizantalLineFull />
        </Line>
        <Wrapper>
          <Section>
            <Left>
              <InfoWrapper>
                <h3>Devetree</h3>
                <p>
                  The team of creative and passionate designers and developers
                </p>
                <Navlinks>
                  <a href="https://www.facebook.com/">Home</a>
                  <a href="https://www.facebook.com/">Products</a>
                  <a href="https://www.facebook.com/">Service</a>
                  <a href="https://www.facebook.com/">Contact</a>
                  <a href="https://www.facebook.com/">Join Us</a>
                </Navlinks>
                <SocialIcons>
                  <IconWrapper>
                    <Icon>
                      <img src={LinkedIn} alt="LinkedIn" />
                    </Icon>
                  </IconWrapper>

                  <IconWrapper>
                    <Icon>
                      <img src={Instagram} alt="insta" />
                    </Icon>
                  </IconWrapper>

                  <IconWrapper>
                    <Icon>
                      <img src={Googlemap} alt="Googlemap" />
                    </Icon>
                  </IconWrapper>
                  <IconWrapper>
                    <Icon>
                      <img src={Github} alt="Github" />
                    </Icon>
                  </IconWrapper>
                </SocialIcons>
                <p>© 2021 Devetree. All rights reserved.</p>
              </InfoWrapper>
            </Left>
            <Right>
              <InfoWrapper>
                <Box>
                  <ContactDetails>
                    <IconWrapper>
                      <Icon>
                        <img src={Email} alt="email" />
                      </Icon>
                    </IconWrapper>
                    <a href="mailto:Support@devetree.com">
                      Support@devetree.com
                    </a>
                  </ContactDetails>
                  <ContactDetails>
                    <IconWrapper>
                      <Icon>
                        <img src={Phone} alt="Phone" />
                      </Icon>
                    </IconWrapper>
                    <a href="tel:+918733896867">+918733896867</a>
                  </ContactDetails>
                  <ContactDetails>
                    <IconWrapper>
                      <Icon>
                        <img src={Location} alt="Location" />
                      </Icon>
                    </IconWrapper>
                    <a href="https://goo.gl/maps/PaxtPWho8oMecwrbA">
                      104, MARVELLA SHOPPERS, Lal Bahadur Shastri Rd, Bardoli,
                      Gujarat 394601
                    </a>
                  </ContactDetails>
                </Box>
              </InfoWrapper>
            </Right>
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;

export const Container = styled.div`
  color: white;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  column-gap: 1rem;
  width: 100%;
  @media screen {
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  width: 50%;
  @media screen {
    @media (max-width: 768px) {
    }
  }
`;
export const Right = styled.div`
  display: flex;
  padding: 2rem 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const InfoWrapper = styled.div`
  padding: 2rem 0rem;
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Pacifico", cursive;
    padding: 0rem 0.5rem;
  }
  p {
    width: 70%;
    padding: 1rem 0.5rem;
  }
`;
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1rem 0rem;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(
    25.52deg,
    rgba(27, 0, 105, 0.2) -7.65%,
    rgba(27, 0, 105, 0) 104.52%
  );
  box-shadow: inset 0px 0px 27px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;
export const Navlinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0rem;
  a {
    padding: 0rem 2rem 0rem 0.5rem;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  @media screen {
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
export const SocialIcons = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Line = styled.div``;
export const HorizantalLineFull = styled.div`
  width: 100%;
  height: 5px;
  background-color: #01f0ff;
`;

export const IconWrapper = styled.div`
  padding: 0rem 0.5rem;
`;

export const Box = styled.div`
  a {
    color: white;
  } /* padding: 4rem;
  background: linear-gradient(
    25.7deg,
    rgba(27, 0, 105, 0.45) -30.39%,
    rgba(27, 0, 105, 0) 120.8%
  );
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.72));
  backdrop-filter: blur(2px);
  border-radius: 10px; */
  @media screen {
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  }
`;
