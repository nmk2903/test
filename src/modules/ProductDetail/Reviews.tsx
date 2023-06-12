import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import ReviewItem from "./ReviewItem";
import userComments from "../../services/comment";
import imgStar from "../../assets/images/icons/star.svg";
import { userComment } from "../../@type/comment.type";
import axios from "axios";
const Reviews = ({ product }: { product: product }) => {
    const [comments, setComments] = useState<userComment[]>();
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/user_comment/${product.id}`)
            .then((response) => {
                setComments(response.data);
            });
        // userComments.getByProduct(product.id).then((data) => {
        //     setComments(data);
        //     console.log(data)
        // });
    }, []);

    return (
        <>
            <div className="border-t-2 border-solid border-t-grayText pt-4 mt-10">
                {/* header */}
                <div className="ml:flex ml:justify-between ml:px-16">
                    {/* title */}
                    <div className="flex justify-between text-2xl font-bold mb-10 ml:w-1/3">
                        <div>{"1 đánh giá"}</div>
                        <div className="inline">
                            {"5/5 "}{" "}
                            <img
                                className="w-6 inline pb-2"
                                src={imgStar}
                                alt=""
                            />
                        </div>
                    </div>
                    {/* reviews */}
                    <div className="ml:pl-16 ml:w-2/3">
                        <form action="">
                            {/* stars */}
                            <div className="mb-4">
                                {"Đánh giá :   "}
                                <Rate
                                    defaultValue={5}
                                    style={{ color: "#2f5acf" }}
                                />
                            </div>
                            {/* content */}
                            <textarea
                                placeholder="Nhập nội dung bình luận của bạn ..."
                                name="review"
                                className="bg-white border-solid border-2 rounded-2xl h-auto w-full py-1 px-5"
                            />
                            <div className="text-end">
                                <button className="hover:bg-grayText hover:text-black hover:font-bold bg-black text-xl rounded-3xl py-2 px-5 h-10 w-1/3 text-white text-center cursor-pointer transition-all mt-2 ">
                                    <span>{"Đánh giá"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* reviews */}
                <div className=" border-t-2 border-solid border-t-grayText mt-8 md:flex flex-wrap">
                    {comments
                        ? comments.map((comment, index) => {
                              return (
                                  <ReviewItem key={index} comment={comment} />
                              );
                          })
                        : ""}
                </div>
            </div>
        </>
    );
};

export default Reviews;
