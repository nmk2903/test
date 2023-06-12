import React from "react";

const ProductDescription = ({ product }: { product: product[] }) => {
    return (
        <>
            <div className=" border-t-2 border-solid border-grayText pt-4 ml:px-16">
                <h3 className="text-2xl font-bold">{"Chi tiết sản phẩm"}</h3>
                {product.map((pr) => {
                    return pr.description;
                })}
            </div>
        </>
    );
};

export default ProductDescription;
