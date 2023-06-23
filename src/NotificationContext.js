import React, { createContext, useState, useEffect } from 'react';
import Notification from './components/mui/utils/Notification';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [notificationOptions, setNotificationOptions] = useState({});
    useEffect(() => {
        if (showNotification) {
            const { lifetime } = notificationOptions;
            const timer = setTimeout(() => {
                hide();
            }, 1200); // Default lifetime is 3 seconds (3000 milliseconds)

            return () => {
                clearTimeout(timer); // Clear the timeout when the component unmounts or showNotification is set to false
            };
        }
    }, [showNotification, notificationOptions]);

    const show = (options) => {
        console.debug('[NotificationContextCore] show')
        const updatedOptions = {
            ...options,
            severity: options.succeeded ? options.success : options.fail,
            handleTheClose: () => {hide()}
        };

        setNotificationOptions(updatedOptions);
        setShowNotification(true);
    };

    const hide = () => {
        console.debug('[NotificationContextCore] hide')
        setShowNotification(false);
    };

    const contextValue = {
        show,
        hide,
    };

    return (
        <NotificationContext.Provider value={contextValue}>
            {showNotification ? (
                <Notification properties={notificationOptions} />
            ) : (
                false
            )}
            {children}
        </NotificationContext.Provider>
    );
};
