import React, { useState, useEffect } from "react";
import {
    ProductDescription,
    ProductSummary,
    Reviews,
    ReviewItem,
} from "../../modules";
import CustomPaging from "../../componenets/cores/CustomPaging";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProductById } from "../../services/productDetail";
import { productBillColumn } from "../../@type/admin.type";
import { Loader } from "../../componenets/cores";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<product[]>();
    const [loading, setLoading] = useState<boolean>(false);
    if (id) {
        useEffect(() => {
            axios;
            getProductById(parseInt(id)).then((data) => {
                setProduct(data);
            });
            setLoading(true);
        }, [id]);
    }
    return (
        <>
            <div className="ml:flex px-3 ml:px-10 ">
                {/* galleryPopup */}
                <div className="ml:w-3/5 ml:pr-16 mb-36">
                    {loading ? (
                        product && product.length ? (
                            <CustomPaging
                                productImages={product[0].product_images}
                            />
                        ) : (
                            " NOT FOUND"
                        )
                    ) : (
                        <Loader />
                    )}
                </div>
                {/* summary */}
                <div className="ml:w-2/5 ml:pl-1">
                    {loading ? (
                        product && product.length ? (
                            product.map((product, index) => {
                                return (
                                    <ProductSummary
                                        key={index}
                                        product={product}
                                    />
                                );
                            })
                        ) : (
                            ""
                        )
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
            {/* description */}
            <div className="px-3">
                {product ? <ProductDescription product={product} /> : ""}
            </div>
            {/* review */}
            <div className="px-3">
                {product
                    ? product.map((product, index) => {
                          return <Reviews key={index} product={product} />;
                      })
                    : " NOT FOUND"}
            </div>
        </>
    );
};

export default ProductDetail;
