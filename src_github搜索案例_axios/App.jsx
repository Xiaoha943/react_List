import './App.css'
import Search from './components/Search';
import List from './components/List'
import { Component } from 'react';
export default class App extends Component {
  state = {
    users: [], //users初始值为数组
    isFirst: true,
    isLoading: false,
    err: '',
  }

  saveUpdateMessage = (update) => {
    this.setState(update)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search saveUpdateMessage={this.saveUpdateMessage} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
