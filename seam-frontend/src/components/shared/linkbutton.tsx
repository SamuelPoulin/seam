import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '../shared/button';

function LinkButton({ match, to, onClick, children }: any): JSX.Element {
    return (
        <Link to={`${match.path + to}`} onClick={onClick}>
            <Button>
                {children}
            </Button>
        </Link>
    )
}

export default withRouter(LinkButton);