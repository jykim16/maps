import React, { Component } from 'react';
import './css/App.css';
import MapView from './MapView';
import ListView from './ListView';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mapBounds: {},
      placeMarkers: [],
      center: {
        lat: 37.783052,
        lng: -122.391030
      }
    }
    this.setMapBounds = this.setMapBounds.bind(this);
    this.setPlaceMarkers = this.setPlaceMarkers.bind(this);
    this.centerMap = this.centerMap.bind(this);
  }

  setMapBounds(bounds) {
    this.setState({
      mapBounds: bounds
    })
  }

  centerMap(center) {
    this.setState({
      center: center
    })
  }

  setPlaceMarkers(markers) {
    this.setState({
      placeMarkers: markers
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          mapBounds={this.state.mapBounds}
          setPlaceMarkers={this.setPlaceMarkers}
        />
        <div className="main">
          <MapView
            coords={{
              // lat: 37.78,
              // lng: -122.39
            }}
            markers={this.state.placeMarkers}
            setMapBounds={this.setMapBounds}
            center={this.state.center}
          />
         <ListView
           list={this.state.placeMarkers}
           centerMap={this.centerMap}
         />
        </div>
      </div>
    );
  }
}

export default App;
