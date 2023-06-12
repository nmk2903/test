import React, { useState } from "react";
import ColorOption from "../cores/ColorOption";
import SizeOption from "../cores/SizeOption";
import img from "../../assets/images/home/xanhbongdem2.png";
import imgStar from "../../assets/images/icons/star.svg";
import { Link } from "react-router-dom";
const Product = ({ product }: { product: product }) => {
    const [colors, setColors] = useState<productColor[]>(
        product.product_colors
    );

    const [sizes, setSizes] = useState<productDetail[]>(
        product.product_colors[0].product_details
    );
    const [border, setBorder] = useState<number>(colors[0].id);
    const handleChangeColor = (item: productColor) => {
        setBorder(item.id);
        setSizes(item.product_details);
    };
    return (
        <>
            <div className="relative w-1/2 px-1 py-1 md:w-1/3 ml:w-1/4">
                <div className="relative pb-3">
                    <div className="pb-4 rounded-lg relative transition-all">
                        {/* image */}
                        <div className="mb-3">
                            <div>
                                <Link to={`/products/${product.id}`}>
                                    {product ? (
                                        <img
                                            src={product.product_images[0].url}
                                            alt=""
                                            className="rounded-3xl"
                                        />
                                    ) : (
                                        ""
                                    )}
                                </Link>
                            </div>
                            <span className="absolute h-5 flex justify-center items-center rounded-lg text-xs top-3 right-4 px-2 font-bold bg-[#f9f86c]">
                                Sắp hết
                            </span>
                            {/* <span className="absolute text-white h-5 flex justify-center items-center rounded-lg text-xs top-3 right-4 px-2 font-bold bg-[#ff3102]">
                                Sale
                            </span>
                            <span className="absolute text-white h-5 flex justify-center items-center rounded-lg text-xs top-3 right-4 px-2 font-bold bg-blueBtn">
                                NEW
                            </span> */}
                            <div className="absolute top-3 left-3 ">
                                <div className="flex items-center ">
                                    <div className="font-bold">{"4.9"}</div>
                                    <div className="mx-[2px] w-3">
                                        {" "}
                                        <img src={imgStar} alt="" />
                                    </div>
                                    <div className="text-blueBtn text-sm">
                                        {"(65)"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            {/* color */}
                            <div className="mb-3">
                                <div className="flex flex-wrap ">
                                    {colors.map((color, index) => {
                                        return (
                                            <ColorOption
                                                key={index}
                                                active={
                                                    border == color.id
                                                        ? true
                                                        : false
                                                }
                                                color={color}
                                                onclick={(item) =>
                                                    handleChangeColor(item)
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            {/* size */}
                            <div className="mb-3">
                                <div className="flex flex-wrap ">
                                    {sizes.map((size, index) => {
                                        return (
                                            <SizeOption
                                                key={index}
                                                size={size}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            {/* name */}
                            <h3 className=" text-sm mb-3 font-medium">
                                <div>{product.name}</div>
                            </h3>
                            <div className="flex text-sm font-bold">
                                <div className="mr-3">
                                    {(
                                        product.price -
                                        (product.price * product.sale) / 100
                                    ).toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </div>
                                <div
                                    className={
                                        product.sale > 0 ? "flex" : "hidden"
                                    }
                                >
                                    <del className="mr-3 text-[#c4c4c4] line-through">
                                        {product.price.toLocaleString("it-IT", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </del>
                                    <div className="mr-3 text-red-600">
                                        {product.sale + "%"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
