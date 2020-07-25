import * as React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
    height: 60px;
    width: 60px;
    border: none;
`;

function Button(props: any) {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    );
}

export default Button;