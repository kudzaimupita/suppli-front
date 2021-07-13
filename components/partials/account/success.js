import React, { useEffect } from 'react';
import { Result, Button } from 'antd';
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../store/cart/action'

const Success = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearCart())
    }, [])
    return (
        <div className="ps-section--vendor ps-vendor-about">
            <div className="container">
                <Result
                    status="success"
                    title="Successful Order!"
                    subTitle="Your order is currently being processed by our team. You can track it in your user dashboard. Thank you."
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