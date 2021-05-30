import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button, notification, Divider, Space } from 'antd';

export const alert = () => {
    const openNotification = (placement, message, type) => {
        notification[type]({
            message: `Notification `,
            description: message,
            placement,
        });
    };
    const alerts = useSelector((state) => state.alert);
    return (
        <>
            {alerts.map((alert) =>
                openNotification(
                    'topRight',
                    alert.msg,

                    alert.alertType
                )
            )}
        </>
    );
};
export default alert;
