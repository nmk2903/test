import React, { useState, useEffect } from "react";
import img from "../../assets/images/ao-the-thao.jpg";
import Product from "../../componenets/layouts/Product";
import { getProductsByCategory } from "../../services/productByCategory";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "../../componenets/cores";
const ProductsByCategory = () => {
    const { id } = useParams();
    const [products, setProducts] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    if (id) {
        useEffect(() => {
            setLoading(true);
            getProductsByCategory(parseInt(id)).then((data) => {
                setProducts(data);
                console.log(data);
            });
            setLoading(false);
        }, [id]);
    }

    return (
        <div className="py-5 px-2 ml:px-4 ml:py-7 max-w-full ">
            {!loading ? (
                products && products.length ? (
                    <div className="mb-5 font-bold text-xl">
                        {"Các sản phẩm thuộc loại: "}
                        <span>{products[0].category.name}</span>
                    </div>
                ) : (
                    "Không có sản phẩm"
                )
            ) : (
                <Loader />
            )}

            <div className="flex flex-wrap flex-row">
                {!loading ? (
                    products && products.length ? (
                        products.map((product: any, index: any) => {
                            return <Product key={index} product={product} />;
                        })
                    ) : (
                        ""
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default ProductsByCategory;
