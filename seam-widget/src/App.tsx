import { h } from 'preact';
import { Configurations } from './models';
import Widget from './widget';
import { AppContext } from './AppContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './assets/themes/light';

type Props = Configurations;
export const App = ({ element, ...appSettings }: Props) => (
    <ThemeProvider theme={lightTheme}>
        <AppContext config={appSettings} element={element}>
            <Widget />
        </AppContext>
    </ThemeProvider>
);
