import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  //按下键盘的回调
  handleKeyUp = (event)=>{
    //获取App传过来的addTodo 方法
    const {addTodo} = this.props
    //如果按下的是回车，进行处理
    const {keyCode,target} = event
    if(keyCode === 13){
      // 拼接一个todo对象
      const newTodo = {id:nanoid(),name:target.value,done:false}
      //调用父组件传过来的方法
      addTodo(newTodo)
      //清空用户输入
      target.value = '';
    }
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} className="addTodo" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
