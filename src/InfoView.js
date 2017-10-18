import React, {Component} from 'react';
import './css/infoview.css';
import D3Flower from './D3Flower'

export default class InfoView extends Component {
  render() {
    return (
      <div id="infoView">
        <div className="logo">
          <img src={this.props.company.squareLogo} height="70px" width="70px" alt="companyLogo"></img>
        </div>
        <a className="companyName" href={'http://'+this.props.company.website}>{this.props.company.name}</a>
        <D3Flower
          company={this.props.company}
        />
      </div>
    );
  }
}
