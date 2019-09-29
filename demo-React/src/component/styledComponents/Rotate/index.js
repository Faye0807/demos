import styled from 'styled-components';
import { rotate } from '../../../style/animate';

// 类名嵌套 伪类
const Rotate = styled('div')`
    width: 50px;
    height: 50px;
    background-color: yellow;
    animation ${rotate} ease 1s infinite;
    @media (max-width: 700px) {
      background: palevioletred;
    }
`;

export default Rotate;
