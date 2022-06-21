import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  handleOnKeyUp=(event)=>{
    if(event.keyCode !== 13) return
    // console.log(event.target.value,event.keyCode);
    this.props.add(event.target.value);
    event.target.value =''
  }
  render() {
    return (
      <div className="todo-header"> <input onKeyUp={this.handleOnKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" /></div>
    )
  }
}
