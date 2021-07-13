import React, { useEffect } from 'react';
import { Result, Button } from 'antd';
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../store/cart/action'

const Success = () => {
    const dispatch = useDispatch()

    return (
        <div className="ps-section--vendor ps-vendor-about">
            <div className="container">
                <Result
                    status="success"
                    title="Success!"
                    subTitle="We've sent an password link to your email address. Thank you."
                    extra={[
                        <a href='/'><Button type="primary" key="console">
                            Home
                        </Button></a>

                    ]}
                />,
            </div>
        </div>
    )
}
export default Success;
