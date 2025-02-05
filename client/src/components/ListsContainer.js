import React, { Component } from 'react';
import axios from "axios";
import "../styles/ListsContainer.css";

class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists')
      .then(response => {
        this.setState({
          lists: response.data
        })
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className="Lists-container">
        {this.state.lists.map(list => {
          return (
            <div className="single-list" key={list.id}>
              <h4>{list.Title}</h4>
              <p>{list.Excerpt}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListsContainer;