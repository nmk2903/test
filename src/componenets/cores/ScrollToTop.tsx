import React, { useEffect, useState } from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import { BackTop, Empty } from "antd";
import { FloatButton } from "antd";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // const location = useLocation();
    const [visible, setVisible] = useState<boolean>(false);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location.pathname]);
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleShowBackToTop = () => {
            window.scrollY > window.innerHeight
                ? setVisible(true)
                : setVisible(false);
        };
        window.addEventListener("scroll", handleShowBackToTop);

        return () => {
            window.removeEventListener("scroll", handleShowBackToTop);
        };
    });

    return visible ? (
        <button onClick={handleScroll}>
            <CaretUpOutlined className="bg-blueBtn text-4xl text-[#fff] p-1 rounded-[30%] hover:bg-[#2147af] fixed bottom-7 right-20 z-10" />
        </button>
    ) : (
        // </boolean>
        <></>
    );
};

export default ScrollToTop;
