import React from "react";
import imgCol from "../../assets/images/home/mceclip1_144.jpg";
import imgRow from "../../assets/images/home/mceclip0_137.jpg";
import imgCareAndShareRow from "../../assets/images/home/mceclip8.png";
import imgCareAndShareCol from "../../assets/images/home/mceclip12_13.png";
const CareAndShare = () => {
    return (
        <div className="mb-12 px-4 relative">
            <a href="#">
                <div>
                    <img className="ml:hidden w-full" src={imgCol} alt="" />
                    <img className="hidden ml:block" src={imgRow} alt="" />
                </div>
                <div className="absolute w-full h-full max-w-2xl flex-col flex justify-end top-0 left-0 px-12 py-10">
                    <div className="mb-4">
                        <img
                            className="ml:hidden max-w-ss"
                            src={imgCareAndShareCol}
                            alt=""
                        />
                        <img
                            className="hidden ml:block max-w-sm"
                            src={imgCareAndShareRow}
                            alt=""
                        />
                    </div>
                    <h2 className="text-3xl text-white font-bold max-w-sm">
                        {"Góp phần mang lại "}
                        <br />
                        {"cuộc sống tươi đẹp hơn cho tụi nhỏ"}
                    </h2>
                    <div className="mt-5 transition-all hover:bg-grayText bg-yellowText inline-flex justify-center items-center text-black h-12 text-base font-bold rounded-full">
                        {"Tìm hiểu thêm về Care&Share"}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CareAndShare;
