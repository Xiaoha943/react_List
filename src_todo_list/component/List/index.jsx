import React, { Component } from 'react'
import Item from '../../component/Item'
import './index.css'

export default class List extends Component {
  deleteItem =(id)=>{
    this.props.delete(id)
  }
  selectDone=(id,done)=>{
    this.props.selectDone(id,done)
  }
 
  render() {
    const {todos} =this.props
    return (
      <ul className="todo-main">
            {todos.map((item)=>{
              return <Item key={item.id} {...item} deleteItem={this.deleteItem} selectDone={this.selectDone}/>
            })}
      </ul>
    )
  }
}
