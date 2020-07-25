import * as React from 'react';
import styled from 'styled-components';

import Button from '../shared/button';
import { CalendarIcon, StatisticsIcon, ExtensionsIcon, SettingsIcon, WidgetsIcon } from '../shared/icons';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 150px;
    height: calc(100vh - 115px);
`;

function DashboardNavBar() {
    return (
        <StyledWrapper>
            <Button>
                <CalendarIcon size={35} />
            </Button>
            <Button>
                <StatisticsIcon size={35} />
            </Button>
            <Button>
                <WidgetsIcon size={35} />
            </Button>
            <Button>
                <ExtensionsIcon size={35} />
            </Button>
            <Button>
                <SettingsIcon size={35} />
            </Button>
        </StyledWrapper>
    );
}

export default DashboardNavBar;