import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import backImg from '../images/nature_eye.jpg'

const styles = {
  backgroundImage: `url(${backImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh"
}

class App extends Component {
  render() {
    return (
      <div className="main" style={styles}>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
