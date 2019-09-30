import styled, {css} from 'styled-components';

// 样式对象
const CssObjButton = styled.button({
    color: 'red'
});

// 返回样式对象的函数
const CssFunButton = styled.button(props => ({
    color:  props.color ||  'red'
}));

// 模板
const Button = styled.button`
    width: 60px;
    margin: 10px;
    line-height: 30px;
    border: none;
    border-radius: 4px;
    @media (max-width: 700px) {
        background: palevioletred;
    }
`;


const primaryBtnCss = css`
    width: 60px;
    margin: 10px;
    line-height: 30px;
    border: none;
    border-radius: 4px;
    background: ${props => props.background || 'blue'}
`;
console.log('primaryBtnCss', primaryBtnCss)

const primaryBtnCssObj = css({
    width: '60px',
    margin: '10px',
    lineHeight: '30px',
    border: 'none',
    borderRadius: '4px'
});

export const BlueButton = styled.button`
    background: blue;${primaryBtnCssObj}
`


export default Button;