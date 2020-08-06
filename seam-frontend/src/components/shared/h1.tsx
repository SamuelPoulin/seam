import styled from 'styled-components';

const StyledH1 = styled.h1`
    padding: 0px;
    margin: 0px;

    font-family: 'Roboto Bold';
    font-size: 32px;
    color: ${(props) => props.theme.colors.onBackground};
`;

export default StyledH1;