import styled from 'styled-components';

export const StyledHeader = styled('header')`
    min-height: 44px;
    line-height: 44px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor :'#fff'};
    text-align: center;
`;

export default StyledHeader;
