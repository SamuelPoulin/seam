import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    iconSize: number;

    colors: {
      background: string;
      onBackground: string;
      hoverBackground: string;

      primary: string;
      onPrimary: string;
      hoverPrimary: string;

      secondary: string;
      onSecondary: string;
      hoverSecondary: string;

      accent: string;
      onAccent: string;
      hoverAccent: string;
    };
  }
}
