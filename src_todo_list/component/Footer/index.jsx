import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleClick=()=>{
    this.props.deleteAll()
  }
  allChecked=(event)=>{
    this.props.allChecked(event.target.checked)
  }

  render() {
    return (
      <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.allChecked} checked={this.props.selectedNum(false) === this.props.selectedNum(true) && this.props.selectedNum(true)!== 0? true:false}/>
            </label>
            <span>
              <span>已完成{this.props.selectedNum(false)}</span> / 全部{this.props.selectedNum(true)}
            </span>
            <button className="btn btn-danger" onClick={this.handleClick}>清除已完成任务</button>
      </div>
    )
  }
}
