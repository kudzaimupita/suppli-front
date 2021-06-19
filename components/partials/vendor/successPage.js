import React from 'react';
import { Result, Button } from 'antd';


const VendorAbout = () => (
    <div className="ps-section--vendor ps-vendor-about">
        <div className="container">
            <Result
                status="success"
                title="Successfully Registered Store!"
                subTitle="Your application is currently being reviewed and you'll receive am email once it's approved. Thank you."
                extra={[
                  <a href='/'><Button type="primary" key="console">
                        Home
                    </Button></a>  
                   
                ]}
            />,
        </div>
    </div>
);

export default VendorAbout;
