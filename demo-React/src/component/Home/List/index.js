import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../../styledComponents/ListItem'

// 自动加前缀
const Left = styled.p`
    flex: 1;
    color: red;
`;
// 类名嵌套 继承
// ListItem必须是styledComponent
// ${ListItem} 是styledComponentId
const Right = styled(Left)`
    flex: 2;
    ${ListItem} &{
        color: green
    }
`;

export default class List extends Component {
    getList(data) {
        return data.map(item => {
            return (
                <ListItem key={item.desc}>
                    <Left className="someClass">{item.title}</Left>
                    <Right>{item.desc}</Right>
                </ListItem>
            );
        })
    }
    render() {
        const {data, className} = this.props;
        return (
            // <div >{this.getList(data)}</div>
            <div className={className}>{this.getList(data)}</div>
        );
    }
}
