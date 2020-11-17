import {h, Fragment} from 'preact';

export interface IconProps {
    children: string;
    size: number;
    color: string;
}

function Icon({ children, size, color }: IconProps): JSX.Element {
    switch (children) {
        case 'widget-calendar':
            return WidgetCalendar(size, color);
    }

    return (<Fragment></Fragment>);
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