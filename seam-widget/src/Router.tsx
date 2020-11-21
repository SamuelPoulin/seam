import { h, createContext } from 'preact';
import { useState } from 'preact/hooks';

const DEFAULT_ROUTE = '/book';

export const Routes = ['/book', '/done'];

export const RouteContext = createContext<{ route: string, setRoute: (route: string) => void }>(
    { route: DEFAULT_ROUTE, setRoute: (_: string) => undefined });

export const RouteProvider = (props: any) => {
    const [route, setRoute] = useState(DEFAULT_ROUTE);

    return (
        <RouteContext.Provider value={{ route, setRoute }}>
            {props.children}
        </RouteContext.Provider>
    );
};