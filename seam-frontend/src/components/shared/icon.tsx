import React from 'react';

export interface IconProps {
    children: string;
    size: number;
    color: string;
}

function Icon({ children, size, color }: IconProps): JSX.Element {
    switch (children) {
        case 'calendar':
            return CalendarIcon(size, color);
        case 'widget-calendar':
            return WidgetCalendar(size, color);
        case 'statistics':
            return StatisticsIcon(size, color)
        case 'widget':
            return WidgetIcon(size, color);
        case 'settings':
            return SettingsIcon(size, color);
        case 'extensions':
            return ExtensionsIcon(size, color);
        case 'previous':
            return PreviousIcon(size, color);
        case 'next':
            return NextIcon(size, color);
        case 'edit':
            return EditIcon(size, color);
        case 'location':
            return LocationIcon(size, color);
        case 'phone':
            return PhoneIcon(size, color);
        case 'email':
            return EmailIcon(size, color);
        case 'exit':
            return ExitIcon(size, color);
        case 'menu':
            return MenuIcon(size, color);
    }

    return (<></>);
}

function CalendarIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1zM8 10h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1z" />
        </svg>
    );
}

function StatisticsIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6.4 9.2h.2c.77 0 1.4.63 1.4 1.4v7c0 .77-.63 1.4-1.4 1.4h-.2c-.77 0-1.4-.63-1.4-1.4v-7c0-.77.63-1.4 1.4-1.4zM12 5c.77 0 1.4.63 1.4 1.4v11.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4V6.4c0-.77.63-1.4 1.4-1.4zm5.6 8c.77 0 1.4.63 1.4 1.4v3.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4v-3.2c0-.77.63-1.4 1.4-1.4z" />
        </svg>
    );
}

function SettingsIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z" />
        </svg>
    );
}

function ExtensionsIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zM3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1zm12.95-1.6L11.7 6.64c-.39.39-.39 1.02 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25c.39-.39.39-1.02 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0z" />
        </svg>
    );
}

function WidgetIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h9v3c0 .55.45 1 1 1h7v9c0 .55-.45 1-1 1z" />
        </svg>
    );
}

function PreviousIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
            <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
        </svg>
    );
}

function NextIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
        </svg>
    );
}

function EditIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
    );
}

function LocationIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-10c4.2 0 8 3.22 8 8.2 0 3.18-2.45 6.92-7.34 11.23-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2 4 5.22 7.8 2 12 2z" />
        </svg>
    );
}

function PhoneIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
        </svg>
    );
}

function EmailIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
        </svg>
    );
}

function ExitIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w4.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        </svg>
    );
}

function MenuIcon(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </svg>
    );
}

function WidgetCalendar(size: number, color: string): JSX.Element {
    return (
        <svg  viewBox="0 0 35 35" width={size} height={size} fill="none">
            <rect y="2.30713" width="35" height="32.693" rx="5" fill="#F0F8FF" />
            <path d="M0 7C0 4.23858 2.23858 2 5 2H30C32.7614 2 35 4.23858 35 7V12H0V7Z" fill={color} />
            <rect x="24" width="4" height="8.02621" rx="2" fill="#F0F8FF" />
            <rect x="7" width="4" height="8.02621" rx="2" fill="#F0F8FF" />
        </svg>
    );
}

export default Icon;