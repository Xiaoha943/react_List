import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {

  state={
    todos:[
      {id:0,name:'吃饭',done:true},
      {id:1,name:'睡觉',done:true},
      {id:2,name:'打豆豆',done:false},
    ]
  }
  add=(data)=>{
    const {todos} =this.state
    if(data.trim() === ""){
      alert('不可输入空数据')
      return
    }
    todos.push({id:todos.length,name:data,done:false})
    this.setState({todos:todos})
  }

  delete =(id)=>{
    let arrList =[]
    this.state.todos.forEach((item)=>{
      if(item.id!==id){
        arrList.push(item)
      }
    })
    this.setState({todos:arrList})
  }

  deleteAll =()=>{
    let newList =[]
    this.state.todos.forEach((item)=>{
      if(item.done === false){
        newList.push(item)
      }
    })
    this.setState({todos:newList})

  }

  selectDone =(id,done)=>{
    let arrList =[]
    this.state.todos.forEach((item)=>{
      if(item.id===id){
        item.done = !done
      }
      arrList.push(item)
    })
    this.setState({todos:arrList})

  }

  selectedNum =(isAll)=>{
    let sum=0
    if(isAll === true){
      for(let i=0;i<this.state.todos.length;i++){
        sum++
      }
    }else{
      for(let i=0;i<this.state.todos.length;i++){
        if(this.state.todos[i].done === true){
          sum++
        }
      }
    }
    return sum
  }
  
  allChecked=(isFlag)=>{
    let List =[]
    if(isFlag === true){
      this.state.todos.forEach((item)=>{
        item.done = true
        List.push(item)
      })  
    }else{
      this.state.todos.forEach((item)=>{
        item.done = false
        List.push(item)
      })
      
    }
    this.setState({todos:List})
    console.log(this.state.todos);
  }
  render() {
    const {todos} =this.state
    return (
      <div className="App">
      <div className="todo-container">
        <div className="todo-wrap">
           <Header add={this.add}/>
           <List todos={todos} delete={this.delete} selectDone ={this.selectDone}/>
           <Footer deleteAll ={this.deleteAll}  selectedNum={this.selectedNum} allChecked={this.allChecked}/>
        </div>
      </div>
    </div>
    )
  }
}
