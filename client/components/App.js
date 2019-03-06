import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="pages">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
