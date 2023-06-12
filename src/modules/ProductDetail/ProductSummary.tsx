import React, { useState } from "react";
import imgStar from "../../assets/images/icons/star.svg";
import ColorOption from "../../componenets/cores/ColorOption";
import SizeOption from "../../componenets/cores/SizeOption";
const ProductSummary = ({ product }: { product: product }) => {
    const [colors, setColors] = useState<productColor[]>(
        product.product_colors
    );

    const [sizes, setSizes] = useState<productDetail[]>(
        product.product_colors[0].product_details
    );
    const [border, setBorder] = useState<number>(colors[0].id);
    const [bg, setBg] = useState<number>(sizes[0].id);
    const handleChangeColor = (item: productColor) => {
        setBorder(item.id);
        setSizes(item.product_details);
    };
    const handleChangeSize = (size:productDetail)=>{
        setBg(size.id)
    };
    return (
        <>
            <form action="">
                <div className="relative">
                    {/* name */}
                    <div className="text-2xl pr-20 font-bold mb-5">
                        {product.name}
                    </div>

                    {/* price */}
                    <div className="flex text-lg font-bold mb-5">
                        <div className="mr-3">
                            {(
                                product.price -
                                (product.price * product.sale) / 100
                            ).toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </div>
                        <div className={product.sale > 0 ? "flex" : "hidden"}>
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

                    {/* colors */}
                    <div>
                        <div className="mb-1">
                            <span>
                                {"Màu sắc: "}{" "}
                                <span>
                                    {colors.map((color, index) => {
                                        if (color.id == border) {
                                            return color.color;
                                        }
                                    })}
                                </span>
                            </span>
                        </div>
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
                    </div>
                    {/* size */}
                    <div>
                        <div className="mb-1">
                            <span>{"Kích thước: "}</span>
                        </div>
                        <div className="mb-3">
                            <div className="flex flex-wrap ">
                                {sizes.map((size, index) => {
                                    return (
                                        <SizeOption key={index}
                                        active = {
                                            bg == size.id ?true : false
                                        }
                                        onclick = {handleChangeSize}
                                        size={size} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* quantily and addCart */}
                    <div className="flex items-center py-4">
                        {/* quantily */}
                        <div className=" flex h-8 w-[100px] rounded-2xl border-2 border-solid border-black font-medium text-lg leading-6">
                            <div className="flex justify-center items-center w-8 h-full">
                                -
                            </div>
                            <input
                                type="number"
                                name=""
                                id=""
                                className="text-center max-w-[40px]"
                                value="1"
                            />
                            <div className="flex justify-center items-center w-8 h-full">
                                +
                            </div>
                        </div>
                        {/* add */}
                        <div className="w-full ml-5  ">
                            <button
                                type="submit"
                                className="h-10 w-full rounded-2xl transition-all text-white bg-black"
                            >
                                {"Thêm vào giỏ hàng"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProductSummary;
