import React from 'react';
import { withTheme } from 'styled-components';

function NotificationIndicator({ theme }: any): JSX.Element {
    return (
        <svg viewBox="0 0 10 10" height="10" width="10" fill={theme.colors.accent}>
            <circle cx="5" cy="5" r="5" />
        </svg >
    );
}

export default withTheme(NotificationIndicator);