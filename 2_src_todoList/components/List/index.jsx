import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos,checkTodo,delTodo} = this.props
    return (
      <div>
        <ul className="todoList">
           {
            todos.map((todoObj)=>{
              return <Item key={todoObj.id} {...todoObj} checkTodo={checkTodo} delTodo={delTodo}/>
            })
           }

        </ul>
      </div>
    )
  }
}
