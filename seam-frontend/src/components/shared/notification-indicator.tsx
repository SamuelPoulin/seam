import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function NotificationIndicator(): JSX.Element {
    const theme = useContext(ThemeContext);

    return (
        <svg viewBox="0 0 10 10" height="10" width="10" fill={theme.colors.accent}>
            <circle cx="5" cy="5" r="5" />
        </svg >
    );
}

export default NotificationIndicator;