import React from 'react';

const PartialDescription = (props) => (
    <div className="ps-document">
        <h5>{props.product && props.product.name}</h5>
        <p>{props.product && props.product.description}</p>
    </div>
);

export default PartialDescription;
