import React, {Component} from 'react';
import './css/Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverSearch: false,
      clickSearch: false
    }
    this.toggleHoverSearch = this.toggleHoverSearch.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);

  }

  toggleHoverSearch() {
    this.setState({
      hoverSearch: !this.state.hoverSearch
    })
  }

  handleClickSearch() {
    this.setState({
      clickSearch: !this.state.clickSearch
    })
    new window.google.maps.places.SearchBox(document.getElementById('input'));
  }

  render() {
    var icon;
    var title;
    if(!this.state.hoverSearch){
      icon = <img src="./assets/zenefitsLogo.png" height="80px" width="80px" alt="Zenefits"></img>
      title = <h1 className="App-title">Zenefits: Locator</h1>
    } else if (this.state.clickSearch){
      icon = <img src="./assets/searchIcon.png" height="80px" width="80px" alt="Search" onClick={this.handleClickSearch}></img>
      title = <input id="input" type="text" />
    } else {
      icon = <img src="./assets/searchIcon.png" height="80px" width="80px" alt="Search"></img>
      title = <h1 className="App-title">Click to begin your search</h1>
    }

    return (
      <header className="App-header" id="header" onMouseEnter={this.toggleHoverSearch} onMouseLeave={this.toggleHoverSearch}>
        <div className="logo">
          {icon}
        </div>
        {title}
      </header>
    );
  }
}
export default Header;
