import React from "react";
import img from "../../assets/images/home/xanhbongdem2.png";
const CartProduct = () => {
    const countUp = () => {};
    const countDown = () => {};
    return (
        <>
            <div className="flex relative mb-8 ">
                <span className="cursor-pointer absolute top-0 right-2 md:right-4">
                    X
                </span>

                <div className="w-40 mr-5 md:mr-2">
                    <img className="rounded-2xl" src={img} alt="" />
                </div>
                <div className="pl-8 flex-col w-full md:pl-2">
                    {/* name */}
                    <div className="md:max-w-s">
                        <a href="">Áo Polo nam co giãn công nghệ Graphene</a>
                    </div>
                    {/* size and color */}
                    <div className="flex mt-5">
                        {/* size */}
                        <div
                            className="mr-7
                    "
                        >
                            <select
                                id="size"
                                className="border-solid border-2 rounded-lg p-2"
                            >
                                <option value="aa">size</option>
                                <option value="aa">aaa</option>
                            </select>
                        </div>
                        {/* color */}
                        <div className="w-20 ">
                            <select
                                id="size"
                                className="border-solid border-2 rounded-lg p-2"
                            >
                                <option value="aa">mau</option>
                                <option value="aa">aaa</option>
                            </select>
                        </div>
                    </div>
                    {/* count and prce */}
                    <div className="flex justify-between mt-7">
                        {/* count */}
                        <div className="border-solid border-2 rounded-lg p-2 w-[90px] inline-flex">
                            <button className="w-3 text-center">-</button>
                            <input
                                className="w-[50px] text-center "
                                type="number"
                            />
                            <button className="w-3 text-center">+</button>
                        </div>

                        {/* price */}
                        <div className="flex-col flex">
                            <span>100000d</span>
                            <del className="text-[#c4c4c4] line-through ">
                                200000d
                            </del>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProduct;
