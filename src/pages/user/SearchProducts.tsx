import React, { useState, useEffect } from "react";
import Product from "../../componenets/layouts/Product";
import { getSearchProducts } from "../../services/searchProducts";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Loader } from "../../componenets/cores";
import { Pagination } from "antd";
const SearchProducts = ({ match, location }: any) => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState(searchParams.get("keyword"));
    const [products, setProducts] = useState<any>();
    const [page, setPage] = useState<any>(searchParams.get("page"));
    const [loading, setLoading] = useState(false);

    const handleChangePage = (page: any, pageSize: any) => {
        setPage(page);
        navigate({
            pathname: "/search",
            search: `?keyword=${keyword}&page=${page}`,
        });
    };
    useEffect(() => {
        setLoading(true);
        getSearchProducts(keyword as string, parseInt(page)).then((data) => {
            setProducts(data);
        });
        setLoading(false);
    }, [keyword, page]);
    // if (keyword) {
    // }
    return (
        <>
            <div className="py-1 px-2 ml:px-4 ml:py-4 max-w-full ">
                {!loading ? (
                    <div className="mb-5 font-bold text-xl">
                        {"Tìm kiếm sản phẩm có tên là:  "}
                        <span>{keyword}</span>
                    </div>
                ) : (
                    <Loader />
                )}

                <div className="flex flex-wrap flex-row">
                    {!loading ? (
                        products && products.data.length ? (
                            products.data.map((product: any, index: any) => {
                                return (
                                    <Product key={index} product={product} />
                                );
                            })
                        ) : (
                            "Không tìm thấy sản phẩm"
                        )
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
            {products && products.data.length ? (
                <Pagination
                    defaultCurrent={page}
                    defaultPageSize={products.per_page}
                    total={products.total}
                    onChange={handleChangePage}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default SearchProducts;
