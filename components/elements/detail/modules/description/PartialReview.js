import React,{useState} from 'react';
// import { Rate } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Comment, Tooltip, Avatar, Rate } from 'antd';
import { createProductReview } from '../../../../../actions/productReviews';

export const PartialReview = (props) => {
    const [rating, setRating] = useState('')
    const [review, setReview] = useState('')
    const handleRatingChange=(e)=>{
setRating(e)
    }
    const handleReviewChange = (e) => {
        setReview(e.target.value)
    }
    console.log(rating,review)

 
    const dispatch = useDispatch();
    const onSubmit=()=>{   dispatch(createProductReview(({ rating, review }), props.product._id))
    setRating('')
    setReview('')}
     
    return (
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
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

                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
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
 
                    <h4>Submit Your Review</h4>
                    <p>
                        Your email address and username will not be published. Required fields
                        are marked
                        <sup>*</sup>
                    </p>
                    <div className="form-group form-group__rating">
                        <label>Your rating of this product</label>
                        <Rate value={rating} onChange={handleRatingChange} />
                    </div>
                    <div className="form-group">
                        <textarea
                        onChange={handleReviewChange}
                        value={review}
                            className="form-control"
                            rows="6"
                            placeholder="Write your review here"></textarea>
                    </div>

                    <div >
                        <button onClick={onSubmit} className="ps-btn">Submit Review</button>
                    </div>

            </div>
        </div>
    )
}


export default PartialReview;
