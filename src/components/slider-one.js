import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { MenuContext } from "@/context/menu-context";
import { SliderOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: false,
  };

  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleContactClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={10}>
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  <button
                    className="common_btn red_bg"
                    onClick={handleContactClick}
                    href="#"
                  >
                    <span>Contact Us</span>
                  </button>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderOne;
