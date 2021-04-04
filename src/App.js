import React, { Component } from "react";
import Age from "./components/Age";
import Name from "./components/Name";
import Points from "./components/Points";
import Rank from "./components/Rank";
import Table from "./components/Table";
import usersJSON from "./data.json";
import SortButton from "./components/SortButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: usersJSON };

    this.sortBtnHandle = this.sortBtnHandle.bind(this);
  }

  sortBtnHandle(type) {
    this.setState({
      data: this.state.data.sort((a, b) => (a[type] > b[type] ? 1 : -1)),
    });
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <SortButton
            handleClick={() => this.sortBtnHandle("age")}
            title="Age"
          />
          <SortButton
            handleClick={() => this.sortBtnHandle("name")}
            title="Name"
          />
          <SortButton
            handleClick={() => this.sortBtnHandle("points")}
            title="Points"
          />
          <SortButton
            handleClick={() => this.sortBtnHandle("rank")}
            title="Rank"
          />
          {/*<Age handleClick={this.sortBtnHandle} />*/}
          {/*<Name handleClick={this.sortBtnHandle} />*/}
          {/*<Points handleClick={this.sortBtnHandle} />*/}
          {/*<Rank handleClick={this.sortBtnHandle} />*/}
          <Table data={this.state.data} />
        </div>
      </div>
    );
  }
}
