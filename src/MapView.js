import React, {Component} from 'react';
import './css/mapview.css';


export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
  }
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate() {
    this.loadMap()
  }

  loadMap(){
    let map = new window.google.maps.Map(document.getElementById('mapView'), {
      zoom: 18,
      center: {
        lat: (this.props.coords.lat || 37.78),
        lng:(this.props.coords.lng || -122.39)
      }
    });
    this.props.markers.forEach(marker => {
      new window.google.maps.Marker({
        position: marker,
        map: map,
      });
    })
  }

  render() {
    return (
      <div ref="map" id="mapView">
      </div>
    );
  }
}
