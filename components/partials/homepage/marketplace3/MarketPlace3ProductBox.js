import React from 'react';
import {
    home_3_clothing,
    home_3_electronic,
    home_3_garden_kitchen,
} from '../../../../public/static/data/martketplace';

import MarketPlace3Promotions from './MarketPlace3Promotions';
import Market3ConsumerElectronics from './modules/Market3ConsumerElectronics';
import Market3Clothing from './modules/Market3Clothing';
import Market3GardenAndKitchen from './modules/Market3GardenAndKitchen';

const MarketPlace3ProductBox = () => (
    <div className="ps-product-box">
        <div className="container">
            <Market3ConsumerElectronics data={home_3_electronic} />
            <MarketPlace3Promotions />

            {/* <Market3Clothing data={home_3_clothing} /> */}
        </div>
    </div>
);

export default MarketPlace3ProductBox;
