import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state={
    mouse:false
  }
  handleClick=(id)=>{
    return ()=>{
     this.props.deleteItem(id)
    }
  }
  handleOnMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  selectDone = (id,done)=>{
    return ()=>{
      this.props.selectDone(id,done)
    }
  }
  render() {
    const {id,name,done} = this.props
    return (
        <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseEnter={this.handleOnMouse(true)} onMouseLeave={this.handleOnMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.selectDone(id,done)}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{ display:this.state.mouse? '':'none' }} onClick={this.handleClick(id)}>删除</button>
        </li>
    )
  }
}
