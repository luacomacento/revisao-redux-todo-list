import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div style={{display: 'flex', gap: 20}}>
        <Link to="/todo">To-do List</Link>
        <Link to="/profile">Profile</Link>
      </div>
    )
  }
}
