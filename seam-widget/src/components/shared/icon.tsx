import { h, Fragment } from 'preact';

export interface IconProps {
    children: string;
    size: number;
    color: string;
}

function Icon({ children, size, color }: IconProps): JSX.Element {
    switch (children) {
        case 'widget-calendar':
            return WidgetCalendar(size, color);
        case 'close':
            return Close(size, color);
    }

    return (<Fragment></Fragment>);
}

function WidgetCalendar(size: number, color: string): JSX.Element {
    return (
        <svg viewBox="0 0 35 35" width={size} height={size} fill="none">
            <rect y="2.30713" width="35" height="32.693" rx="5" fill="#F0F8FF" />
            <path d="M0 7C0 4.23858 2.23858 2 5 2H30C32.7614 2 35 4.23858 35 7V12H0V7Z" fill={color} />
            <rect x="24" width="4" height="8.02621" rx="2" fill="#F0F8FF" />
            <rect x="7" width="4" height="8.02621" rx="2" fill="#F0F8FF" />
        </svg>
    );
}

function Close(size: number, color: string): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
        </svg>
    )
}

export default Icon;