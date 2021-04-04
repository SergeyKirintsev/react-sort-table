import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped" data-testid="leaderboard-table">
          <thead>
            <tr key="head">
              <th>Age</th>
              <th>Name</th>
              <th>Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user, idx) => (
              <tr key={idx}>
                <td>{user.age}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
                <td>{user.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
