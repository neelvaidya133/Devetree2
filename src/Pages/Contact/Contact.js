import React from "react";
import styled from "styled-components";
import LinkedIn from "../../Assets/Icons/LinkedIn 2.svg";
import Instagram from "../../Assets/Icons/Instagram.svg";
import Googlemap from "../../Assets/Icons/Google Maps Old.svg";
import Github from "../../Assets/Icons/GitHub.svg";
import back from "../../Assets/Group 85.svg";
import Email from "../../Assets/Icons/Secured Letter.svg";
import Phone from "../../Assets/Icons/Phone.svg";
import Location from "../../Assets/Icons/Location.svg";

const Contact = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <ItemWrapper
              style={{
                width: "65%",
              }}
            >
              <h3>Devetree</h3>
              <p>
                The team of creative and passionate designers and developers
              </p>
              <ContactDetails>
                <IconWrapper>
                  <Icon>
                    <img src={Email} alt="email" />
                  </Icon>
                </IconWrapper>
                <a href="mailto:Support@devetree.com">Support@devetree.com</a>
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
            </ItemWrapper>
          </Left>
          <Right>
            <ItemWrapper>
              <iframe
                title="Devetree"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14886.426759329579!2d73.1135204!3d21.1282411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9150b79ba4c9e170!2sDevetree%20Technolabs!5e0!3m2!1sen!2sin!4v1673872114338!5m2!1sen!2sin"
                width="300"
                height="450"
                style={{ border: 0, borderRadius: "16px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </ItemWrapper>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  background-color: #050216;
  background-image: url("${back}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 107%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(
    49.25deg,
    rgba(217, 217, 217, 0.1) -8.06%,
    rgba(217, 217, 217, 0) 132.12%
  );
  backdrop-filter: blur(50px);

  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  border: 5px solid rgba(217, 217, 217, 0.1);
  padding: 1rem;
  @media screen {
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0rem;
    }
  }
`;
const Left = styled.div`
  padding: 0rem 3rem;
`;
const Right = styled.div``;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin: 0;
    color: white;
    font-size: 30px;
    line-height: 53px;
    font-weight: 400;
    font-family: "Pacifico", cursive;
  }
  p {
    color: #fff;
  }
`;
const Logo = styled.div``;

export const IconWrapper = styled.div`
  padding: 0rem 0.5rem 0rem 0rem;
`;
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1rem 0rem;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const SocialIcons = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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
