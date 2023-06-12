import React from "react";
import Button from "../../componenets/cores/Button";
import brand1 from "../../assets/images/home/mceclip1_15.jpg";
import brand2 from "../../assets/images/home/mceclip0_84.png";
const Brands = () => {
    return (
        <div className="my-12 px-4">
            <div className="flex-col ml:flex-row flex ml:gap-8 gap-6 ">
                <div className="relative">
                    <img src={brand1} alt="" />
                    <div className="max-w-x absolute left-6 top-24 ml-5 ml:left-10 ml:top-1/4 ml:max-w-sm  ">
                        <h2 className="text-4xl mb-4 ml:text-blackText ml:text-6xl">
                            {"84RISING*"}
                        </h2>
                        <p className="mb-10 max-w-s ml:max-w-none opacity-70 ml:text-lg">
                            {"Local brand dành cho giới trẻ"}
                            <br />
                            <b>{"Áo thun đón hè chỉ từ 199K"}</b>
                        </p>
                        <Button
                            styleProps={{
                                padding: "0 32px",
                                borderRadius: "24px",
                            }}
                        >
                            {<span>{"Mua ngay"}</span>}
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <img src={brand1} alt="" />
                    <div className="max-w-x absolute left-6 top-24 ml-5 ml:left-10 ml:top-1/4 ml:max-w-sm  ">
                        <h2 className="text-4xl m   b-4 ml:text-blackText ml:text-6xl">
                            {"CM24"}
                        </h2>
                        <p className="mb-10 max-w-s ml:max-w-none opacity-70 ml:text-lg">
                            {"Thương hiệu chăm sóc cá nhân cho nam giới "}
                            <br />
                            <b>
                                {
                                    "Tặng 1 Quần shorts nam thể thao 5 thoáng khí trị giá 149K cho đơn từ 249K"
                                }
                            </b>
                        </p>
                        <Button
                            styleProps={{
                                padding: "0 32px",
                                borderRadius: "24px",
                            }}
                        >
                            {<span>{"Mua ngay"}</span>}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
