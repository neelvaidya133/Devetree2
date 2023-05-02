import React, { useEffect } from "react";
import styled from "styled-components";
import {
  NavContainer,
  NavLogo,
  NavMenu,
  Button,
  MobileMenu,
  MenuItems,
  Icon,
} from "./NavbarStyle";

import { RiCloseFill, RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navColor, setNavColor] = React.useState("#050216");
  const [isMobile, setIsmobile] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleCLick = () => {
    if (!isMobile) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  };
  const Navbg = () => {
    if (window.scrollY >= 80) {
      setNavColor("#050216");
    } else {
      setNavColor("transparent");
    }
  };
  useEffect(() => {
    Navbg();
    window.addEventListener("scroll", Navbg);
  });
  return (
    <>
      <NavContainer NavColor={navColor}>
        <NavLogo>
          <Link to="/">
            <h1>Devetree</h1>
          </Link>
        </NavLogo>

        <NavMenu>
          <NavLink
            to="/"
            smooth={true}
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            to="/product"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Product</a>
          </NavLink>
          <NavLink
            to="/service"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Service</a>
          </NavLink>
          <NavLink
            to="contact"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Contact</a>
          </NavLink>
          <NavLink
            to="joinus"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Join Us</a>
          </NavLink>
        </NavMenu>
      </NavContainer>
      <Icon>
        {isOpen ? (
          <RiCloseFill onClick={handleCLick} style={{ padding: "1rem" }} />
        ) : (
          <RiMenu4Line onClick={handleCLick} style={{ padding: "1rem" }} />
        )}
      </Icon>
      <MobileMenu mobile={isMobile}>
        <MenuItems>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
            onClick={handleCLick}
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            onClick={handleCLick}
            to="product"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Product</a>
          </NavLink>
          <NavLink
            onClick={handleCLick}
            to="service"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Service</a>
          </NavLink>
          <NavLink
            onClick={handleCLick}
            to="contact"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Contact</a>
          </NavLink>
          <NavLink
            onClick={handleCLick}
            to="joinus"
            className={(navData) =>
              navData.isActive ? "activeStyle" : undefined
            }
          >
            <a>Join Us</a>
          </NavLink>
        </MenuItems>
      </MobileMenu>
    </>
  );
};

export default Navbar;
