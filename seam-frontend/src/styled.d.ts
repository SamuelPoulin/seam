import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            onBackground: string;

            primary: string;
            onPrimary: string;

            secondary: string;
            onSecondary: string;

            accent: string;
            onAccent: string;
        }
    }
}