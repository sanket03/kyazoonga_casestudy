import React, { Component } from 'react';

import Header from './header/Header';
import Carousel from './carousel/Carousel';
import Ticket from './hot_tickets_section/Ticket';
import Categories from './categories_section/Categories';
import Blog from './blog/Blog';
import FeaturedList from './featured/FeaturedList';
import Footer from './footer/Footer';

class App extends Component {

  constructor() {
    super();
    this.view = window.innerWidth > 768  ? 'desktop' : 'mobile'
    
    // Initializing state
    this.state = {
      view: this.view
    }

    // Adding event listener on window resize to check for mobiel/desktop view
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  // Set 'view' state depending on window width
  onWindowResize() {
    let view = window.innerWidth > 768  ? 'desktop' : 'mobile'
    this.setState((prevState) => {
      return {
        view
      }
    })
    console.log(this.state.view);
  }

  render() {
    return (
      <div id="app">
        <Header view = {this.state.view}/>
        <Carousel />
        <Ticket />
        <Categories />
        <Blog />
        <FeaturedList />
        <Footer />
      </div>
    );
  }
}

export default App;
