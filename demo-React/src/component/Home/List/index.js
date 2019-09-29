import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../../styledComponents/ListItem'

// 自动加前缀
const Left = styled.p`
    flex: 1;
    color: red;
`;
// 类名嵌套
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
                <ListItem>
                    <Left className="someClass">{item.title}</Left>
                    <Right>{item.desc}</Right>
                </ListItem>
            );
        })
    }
    render() {
        const {data, className} = this.props;
        return (
            <div className={className}>{this.getList(data)}</div>
        );
    }
}
