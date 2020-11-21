import { h } from 'preact';
import { Configurations } from './models';
import Widget from './components/widget/widget';
import { AppContext } from './AppContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './assets/themes/light';
import { RouteProvider } from './Router';

type Props = Configurations;
export const App = ({ element, ...appSettings }: Props) => (
    <AppContext config={appSettings} element={element}>
        <ThemeProvider theme={lightTheme}>
            <RouteProvider>
                <Widget />
            </RouteProvider>
        </ThemeProvider>
    </AppContext>
);
