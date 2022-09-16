//引入React核心库
import React,{Component} from 'react';
//引入Hello 组件
import Hello from './components/Hello'


export default class App extends Component {
    render(){
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}