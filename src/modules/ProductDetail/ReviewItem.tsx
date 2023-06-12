import React, { ReactNode } from "react";
import { Rate } from "antd";
import imgStar from "../../assets/images/icons/star.svg";
import { userComment } from "../../@type/comment.type";
const ReviewItem = ({ comment }: { comment: userComment }) => {
    

    return (
        <>
            <div className="p-4 border-b-2 border-grayText md:w-1/2">
                <div className="flex flex-col ml:flex-row">
                    {/* star */}
                    <div className="flex mb-5 w-1/3">
                        
                        <Rate value={comment.star} disabled={true}  style={{ color: "#2f5acf" }}/>
                        {/* <span className="mr-[6px]">
                            <img className="w-4" src={imgStar} alt="" />
                        </span> */}
                    </div>
                    {/* content */}
                    <div className="w-2/3">
                        {/* author */}
                        <div className="mb-8">
                            <div className="font-bold">{comment.user_id}</div>
                        </div>
                        <div>
                            <div className="mb-3">{comment.content}</div>
                            <div className="text-gray-500 italic text-sm">
                                {comment.comment_at.toString()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewItem;
