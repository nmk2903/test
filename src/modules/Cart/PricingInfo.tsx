import React from "react";

const PricingInfo = () => {
    return (
        <>
            <div className="px-2">
                {/* */}
                <div className="flex justify-between mb-4  border-t-2  border-solid pt-7">
                    <p>Tạm tính</p>
                    <p className="text-right">
                        <span className="text-right"> 10000đ</span>
                        <span className="block text-[14px]">
                            <i>
                                {"(Tiết kiệm: "}
                                <span className="text-blueBtn ">{"1000đ"}</span>
                                {")"}
                            </i>
                        </span>
                    </p>
                </div>
                {/* */}
                <div className="flex justify-between mb-4  border-b-2  border-solid pb-3">
                    <p>Giảm giá</p>
                    <p className="text-right">{"0đ"}</p>
                </div>

                <div className="flex justify-between mb-4">
                    <p>Giảm giá</p>
                    <p className="text-right">
                        <span className="font-bold text-2xl">{"50.000đ"}</span>
                        <span className="text-red-500 block">
                            {"(Đã giảm 38% trên giá gốc)"}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default PricingInfo;
