import React, { Component } from 'react';
import './app.css';

const users = [
  "sanzok",
  "sabin",
  "subash",
  "sakar",
  "dipesh",
  "dinesh",
  "rupesh",
  "kiran",
  "zooker"
];

class App extends Component {

  state={
    users : users
  }

  renderUsers = (names) => {
    return(
      names.map((name,i)=>(
        <div className="card_name" key={i}>
          {name}
        </div>
      ))
    )
  }

  filterUser = (event) => {
    let keyword = event.target.value.toLowerCase();
    let filteredUsers = users.filter(user=>{
        user = user.toLowerCase();
        return user.indexOf(keyword)>-1;
    });
    this.setState({
      users: filteredUsers
    })
  }

  render() {
    return (
      <div className="app">

        <div className="header">
          <span className="logo">Users Card</span>
          <input type="text" placeholder="Search" onChange={this.filterUser}/>
        </div>
        
        <div className="card">
          {this.renderUsers(this.state.users)}
        </div>

      </div>
    );
  }
}

export default App;
