import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouseIn: false
  }

  //处理鼠标移入移出事件
  handleHover = (mouseIn)=> {
    return ()=>{
      this.setState({mouseIn})
    }
    
  }

  //处理单击事件
  handleCheck = (id) => { 
    return (event)=>{
      this.props.checkTodo(id,event.target.checked)
    }
  }

  //处理删除事件
  handleDel = (id)=>{
    return ()=>{
      if(window.confirm('确认删除吗？')){
        // console.log('删除了')
        this.props.delTodo(id)
      }
    }
    
  }

  render() {
    const { id, name, done } = this.props
    const { mouseIn } = this.state

    return (
      <li onMouseEnter={this.handleHover(true)} onMouseLeave={this.handleHover(false)} style={{background: mouseIn ? '#ccc' : 'none'}} >
        <input type="checkbox"  checked={done}  onChange={this.handleCheck(id)}  className="itemCheck" />
        <span>{name}</span>
        <input type="button" onClick={this.handleDel(id)} style={{display: mouseIn ? "block" : "none" }} value="删 除" className="itemDel" />
      </li>
    )
  }
}
