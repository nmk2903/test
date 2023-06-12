import React from "react";
import Button from "../../componenets/cores/Button";
import imgTrunk from "../../assets/images/home/mceclip0_61.jpg";
const Basic = () => {
    return (
        <>
            <div className="flex-col bg-pinkBg ml:flex-row ml:flex">
                <div className=" text-4xl py-8 px-4 max-w-2xl ml:flex-1 ml:text-5xl">
                    <h2 className="text-black  mb-4 ml">
                        {"Quần lót Trunk Excool "}
                        <br />
                        {"Microfiber Seamless "}
                    </h2>
                    <p className="mb-8">
                        {"Nhập "} <b>{"UDT530K "}</b>{" "}
                        {" - Giảm thêm 30K cho combo"}
                    </p>
                    <Button
                        styleProps={{
                            padding: "24px 48px",
                            borderRadius: "24px",
                        }}
                    >
                        {<span>{"Mua ngay"}</span>}
                    </Button>
                </div>
                <div className="flex-1">
                    <img src={imgTrunk} alt="" className="h-full" />
                </div>
            </div>{" "}
        </>
    );
};

export default Basic;
