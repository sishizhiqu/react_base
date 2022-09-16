import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class app extends Component {
  //初始化状态
  state = {
    todos: [
      { id: nanoid(), name: '吃饭', done: false },
      { id: nanoid(), name: '睡觉', done: false },
      { id: nanoid(), name: '滑雪', done: false },
      { id: nanoid(), name: '学习', done: false },
    ]
  }

  //父子通信
  //父传子 ----> 直接传给子props
  //子传父 ----> 父传给子一个函数，该函数接受一个参数，由子调用函数传参，则实现子传父

  //添加一个事项
  addTodo = (newTodo) => {
    const { todos } = this.state
    this.setState({ todos: [newTodo, ...todos] })

  }

  //修改指定事项的状态,勾选或取消勾选一个事项的回调
  checkTodo = (id, done) => {
    const { todos } = this.state
    this.setState({
      todos:
        todos.map((todoObj) => {
          if (todoObj.id === id)  return {...todoObj,done}
          else return todoObj
        })
    })
  }

  //删除一个todo
  delTodo = (id)=>{
    const { todos } = this.state
    this.setState({
      todos: 
        todos.filter((todoObj)=>{return todoObj.id !== id})
      
    })
  }

  //全选全不选
  checkAll = (done)=>{
    const { todos } = this.state
    this.setState({
      todos: todos.map((todoObj)=>{
        //扩展运算符，后面的属性和扩展出来的重复会覆盖
        return {...todoObj,done}
      })
    })
  }

  //删除已完成
  delAllDone = ()=>{
    const { todos } = this.state
    this.setState({
      todos: todos.filter((todoObj)=>{return !todoObj.done})
    })
  }

  render() {
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} checkTodo={this.checkTodo} delTodo={this.delTodo}/>
        <Footer todos={this.state.todos} checkAll={this.checkAll} delAllDone={this.delAllDone}/>

      </div>
    )
  }
}
