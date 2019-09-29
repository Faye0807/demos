import styled, { css } from 'styled-components';
// export const StyledHeader = styled.header`
const StyledHeader = styled('header')`
    min-height: 44px;
    line-height: 44px;
    /* background-color: ${props => props.backgroundColor ? props.backgroundColor :'#fff'}; */
    text-align: center;
    border-bottom: 1px solid #eee;
    ${props => props.backgroundColor ? css`
        background-color: ${props.backgroundColor}
    ` : css`
        background-color: #fff
    `}
`;

export default StyledHeader;
