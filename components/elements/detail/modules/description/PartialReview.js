import React from 'react';
// import { Rate } from 'antd';
import { Comment, Tooltip, Avatar, Rate } from 'antd';
import Rating from '../../../Rating';
const PartialReview = (props) => (
    <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
            <div className="ps-block--average-rating">
                <div className="ps-block__header">
                    <h3>{props.product && props.product.ratingsAverage}</h3>
                    <Rate
                        disabled
                        defaultValue={
                            props.product && props.product.ratingsAverage
                        }
                    />

                    <span>
                        {props.product && props.product.ratingsQuantity} Reviews
                    </span>
                </div>
                {/* <div className="ps-block__star">
                    <span>5 Star</span>
                    <div className="ps-progress" data-value="100">
                        <span></span>
                    </div>
                    <span>100%</span>
                </div>
                <div className="ps-block__star">
                    <span>4 Star</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
                <div className="ps-block__star">
                    <span>3 Star</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
                <div className="ps-block__star">
                    <span>2 Star</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
                <div className="ps-block__star">
                    <span>1 Star</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div> */}
            </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
            <h4>Reviews</h4>
            {props.product &&
                props.product.reviews &&
                props.product.reviews.map((review) => (
                    <Comment
                        // actions={actions}
                        author={
                            <>
                                <a>Anynomous</a>
                                {`   `} {review.createdAt.slice(0, 10)}
                                {`   `}
                                <Rate disabled defaultValue={review.rating} />
                            </>
                        }
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={<p>{review.review}</p>}
                        // datetime={
                        //     <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        //         <span>{moment().fromNow()}</span>
                        //     </Tooltip>
                        // }
                    />
                ))}{' '}
            <form className="ps-form--review" action="/" method="get">
                <h4>Submit Your Review</h4>
                <p>
                    Your email address will not be published. Required fields
                    are marked
                    <sup>*</sup>
                </p>
                <div className="form-group form-group__rating">
                    <label>Your rating of this product</label>
                    <Rate disabled />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Write your review here"></textarea>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group submit">
                    <button className="ps-btn">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
);

export default PartialReview;
