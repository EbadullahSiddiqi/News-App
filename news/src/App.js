import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  name = "Ebad";
  render() {
    return (
      <>
        <Navbar/>
        <News/>
      </>
    )
  }
}
