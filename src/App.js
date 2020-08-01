import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFlield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFlield: e.target.value })
  }

  render() {
    const { monsters, searchFlield } = this.state;
    const filteredMonstrs = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFlield.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonstrs} />
      </div>
    );
  }
}

export default App;
