import styled from 'styled-components';
// 类名嵌套 伪类
const ListItem = styled('div')`
    display: flex;
    align-items: center;
    border-bottom: 1px solid red;
    &:last-child{
        border: none;
    }
    // .someClass{
    //     color: green
    // }
`;

export default ListItem;
