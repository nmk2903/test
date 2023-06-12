import React, { useState, useEffect } from "react";
import Dialog from "../../componenets/cores/Dialog";
import Carousel from "../../componenets/cores/Carousel";
import img1 from "../../assets/images/home/mceclip0_105.jpg";
import img2 from "../../assets/images/home/mceclip1_161.jpg";
import img3 from "../../assets/images/home/mceclip4_28.jpg";
import img4 from "../../assets/images/home/mceclip5_81.jpg";
import img5 from "../../assets/images/home/mceclip6_43.jpg";
import img6 from "../../assets/images/home/mceclip7_13.jpg";

const Diary = () => {
    const [imgState, setImgState] = useState<string[]>([
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
    ]);

    const [size, setSize] = useState<number>(3);
    // useEffect(() => {
    //     setSize(window.innerWidth);
    // }, [window.innerWidth]);

    // console.log(window.matchMedia(`screen and (min-width: ${size}px)`).matches);
    // console.log(size);
    const changeSlidesToShow = (slidesToShow: number) => {
        if (slidesToShow != size) {
            setSize(slidesToShow);
        }
    };
    const settingCarousel: carouselSetting = {
        slidesToShow: 2,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const checkResize = () => {
        if (window.innerWidth < 768) {
            settingCarousel.slidesToShow = 3;
            changeSlidesToShow(settingCarousel.slidesToShow);
        } else if (window.innerWidth < 960) {
            settingCarousel.slidesToShow = 4;
            changeSlidesToShow(settingCarousel.slidesToShow);
        } else {
            settingCarousel.slidesToShow = 5;
            changeSlidesToShow(settingCarousel.slidesToShow);
        }
    };
    window.addEventListener(
        "resize",
        function (event) {
            checkResize();
        },
        false
    );
    return (
        <>
            {checkResize()}
            <div className="mb-12 px-4">
                <h2 className="text-2xl text-black font-bold text-center">
                    Nhật ký CoolMate
                </h2>
                <p className="text-base font-light text-center my-4">
                    Chia sẻ diện mạo mới nhất của bạn cùng với #Coolmate.
                </p>
                <Carousel settingCarousel={settingCarousel}>
                    {imgState.map((img, index) => {
                        return (
                            <div
                                className="max-w-x min-w-xs mx-2 px-2"
                                key={index}
                            >
                                <Dialog img={img}></Dialog>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Diary;
