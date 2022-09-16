import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  //处理全选/全不选
  handleCheckAll = (event)=>{
    this.props.checkAll(event.target.checked)
  }
  //删除所有已完成
  handleDelAllDone = ()=>{
    if(window.confirm('确定删除所有已完成吗？')){
      this.props.delAllDone()
    }
    
  }

  render() {
    const {todos} = this.props
    let total = todos.length
    let doneNum = todos.reduce((preValue,current)=>{return preValue + (current.done ? 1 : 0)},0)
    return (

      <div className="countWrap">
        <input type="checkbox" className="checkAll" onChange={this.handleCheckAll}  checked={doneNum===total&&total!==0}/>
        <div className="count">
          <span>已完成</span> <i className="doneNum">{doneNum}</i>
          <span>/&nbsp;全部</span> <i className="todoNum">{total}</i>
        </div>

        <input type="button" onClick={this.handleDelAllDone} value="清除已完成任务" className="removeDone"></input>
      </div>

    )
  }
}
