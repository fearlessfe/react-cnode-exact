import React from 'react'
// import {
//   Link,
// } from 'react-router-dom'
import Routes from '../config/router'
import AppBar from './layout/app-bar';

export default class App extends React.Component {
  componentDidMount() {
    // todo
  }

  render() {
    return [
      <AppBar />,
      <Routes key="routes" />,
    ]
  }
}
