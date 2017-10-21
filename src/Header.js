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
  componentDidMount() {
    this.searchBox = new window.google.maps.places.SearchBox(document.getElementById('input'));
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;
    (function(google, searchBox, setPlaceMarkers){
      searchBox.addListener('places_changed', function() {
        var places = searchBox.gm_accessors_.places.Lc.searchBoxPlaces;
        var markers = [];
        // For each place, get the icon, name and location.
        markers = places.map(function(place) {
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };
          return Object.assign(place, {icon: icon, label:labels[labelIndex++ % labels.length]})
        });
        setPlaceMarkers(markers);
      })
    })(window.google, this.searchBox, this.props.setPlaceMarkers)
  }

  componentDidUpdate() {
    this.searchBox.setBounds(this.props.mapBounds)
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
  }

  render() {
    var icon;
    var title;
    var display;
    if(!this.state.hoverSearch){
      icon = <img src="./assets/zenefitsLogo.png" height="80px" width="80px" alt="Zenefits"></img>
      title = <h1 className="App-title">Zenefits: Locator</h1>
    } else {
      icon = <img src="./assets/searchIcon.png" height="80px" width="80px" alt="Search"></img>
      title = <h1 className="App-title" onClick={this.handleClickSearch}>Click to begin your search</h1>
    }
    if (!this.state.clickSearch){
      display = {display: "none"}
    } else {
      display = {display: "inherit"}
    }

    return (
      <header className="App-header" id="header" onMouseEnter={this.toggleHoverSearch} onMouseLeave={this.toggleHoverSearch}>
        <div className="logo">
          {icon}
        </div>
        <div className="info">
          {title}
          <input id="input" type="text" style={display}/>
        </div>
      </header>
    );
  }
}
export default Header;
