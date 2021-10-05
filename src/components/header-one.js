import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { MenuContext } from "@/context/menu-context";
import { Link } from "gatsby";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleSearchClick = e => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  const handleContactClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`header_01 ${
        true === sticky ? "fixedHeader animated flipInX" : null
      }`}
      id="header"
    >
      <Container fluid>
        <Row >
            <div className="logo">
              <Link to="/">
                <img src={LogoImage.light} alt="" class="w-50" />
              </Link>
            </div>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderOne;
