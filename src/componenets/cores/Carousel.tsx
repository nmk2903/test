import React from "react";
import Slider from "react-slick";

import Dialog from "../../componenets/cores/Dialog";
import img6 from "../../assets/images/home/mceclip7_13.jpg";
const Carousel = ({
    settingCarousel,
    children,
}: {
    settingCarousel: carouselSetting;
    children: React.ReactNode;
}) => {
    const settings: carouselSetting = {
        // dots: true,
        // infinite: true,
        // slidesToShow: ,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,

        dots: settingCarousel.dots ? settingCarousel.dots : false,
        fade: settingCarousel.fade ? settingCarousel.fade : false,
        infinite: settingCarousel.infinite ? settingCarousel.infinite : false,
        speed: settingCarousel.speed ? settingCarousel.speed : 500,
        autoplay: settingCarousel.autoplay ? settingCarousel.autoplay : false,
        slidesToShow: settingCarousel.slidesToShow
            ? settingCarousel.slidesToShow
            : 1,
        slidesToScroll: settingCarousel.slidesToScroll
            ? settingCarousel.slidesToScroll
            : 0,
        autoplaySpeed: settingCarousel.autoplaySpeed
            ? settingCarousel.autoplaySpeed
            : 1000,
        pauseOnHover: settingCarousel.pauseOnHover
            ? settingCarousel.pauseOnHover
            : false,
    };
    return (
        <>
            <div>
                <Slider {...settings}>{children}</Slider>
            </div>
        </>
    );
};

export default Carousel;
