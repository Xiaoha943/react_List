import './App.css'
import Search from './components/Search';
import List from './components/List'
import { Component } from 'react';
export default class App extends Component {
  state = { users: [] }

  saveUsers = (users) => {
    this.setState({ users })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search saveUsers={this.saveUsers} />
          <List users={this.state.users} />
        </div>
      </div>
    )
  }
}
