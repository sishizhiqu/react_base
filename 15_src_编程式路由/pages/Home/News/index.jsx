import React, { Component } from 'react'

export default class News extends Component {

    componentDidMount(){
        setTimeout(() => {
            // V5版本写法，V6使用useNavigate()实现。只能用于 函数组件
            this.props.history.push('/home/message')
        }, 3000);
    }
    render() {
        return (
          
                
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
           
        )
    }
}
