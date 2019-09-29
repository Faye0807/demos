import styled, { css } from 'styled-components';
window.styled = styled;
// export const StyledHeader = styled.header`
const StyledHeader = styled('header')`
    min-height: 44px;
    line-height: 44px;
    /* background-color: ${props => props.backgroundColor ? props.backgroundColor :'#fff'}; */
    text-align: center;
    ${props => props.backgroundColor ? css`
        background-color: ${props.backgroundColor}
    ` : css`
        background-color: #fff
    `}
`;

export default StyledHeader;
