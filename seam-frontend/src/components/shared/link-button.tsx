import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button, { ButtonProps } from '../shared/button';

export interface LinkButtonProps extends ButtonProps {
    match: any;
    to: any;
}

function LinkButton({ match, to, onClick, children }: any): JSX.Element {
    return (
        <Link to={`${match.path + to}`}>
            <Button onClick={onClick}>
                {children}
            </Button>
        </Link>
    )
}

export default withRouter(LinkButton);