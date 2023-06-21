import React, { createContext, useState } from 'react';
import Notification from './components/mui/utils/Notification';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [opt, setOptions] = useState('');

    const show = (options) => {
        if(options.succeeded){
            options.severity = options.success
        }else{
            options.severity = options.fail
        }
        setOptions(options);
        setShowNotification(true);
    };

    const hide = () => {
        setShowNotification(false);
    };

    const contextValue = {
        show,
        hide,
    };

    return (
        <NotificationContext.Provider value={contextValue}>
            {showNotification ?
                <Notification 
                    properties={opt}
                ></Notification>
                :
                false
            }
            {children}
        </NotificationContext.Provider>
    );
};
