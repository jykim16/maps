import React, { Component } from 'react';
import './css/App.css';
import MapView from './MapView';
import InfoView from './InfoView';
import ListView from './ListView';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      companyChosen: false,
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="main">
          <MapView
            coords={{
              // lat: 37.78,
              // lng: -122.39
            }}
            markers={[{lat: 37.78, lng: -122.39}]}
          />
          {this.state.companyChosen ?
            <InfoView
              company={{
                "id": 354,
                "name": "IBM",
                "website": "www.ibm.com",
                "isEEP": false,
                "exactMatch": false,
                "industry": "",
                "numberOfRatings": 0,
                "squareLogo": "http://media.glassdoor.com/sqll/354/ibm-squarelogo.png",
                "overallRating": 0,
                "ratingDescription": "Not Applicable",
                "cultureAndValuesRating": "3.6",
                "seniorLeadershipRating": "2.9",
                "compensationAndBenefitsRating": "2.6",
                "careerOpportunitiesRating": "2.9",
                "workLifeBalanceRating": "3.5",
                "featuredReview": {
                    "id": 3855871,
                    "currentJob": false,
                    "reviewDateTime": "2014-03-12 04:56:58.41",
                    "jobTitle": "Employee",
                    "location": "",
                    "headline": "an extremly good compagny with very high benefits and perfectly committed to its employees with a great compagny culture",
                    "pros": "an extremly good compagny with very high benefits and perfectly committed to its employees with a great compagny culture",
                    "cons": "opportunities to travel to conference have been reduced"
                }
              }}
            /> :
           <ListView
             search={[]}
           />
          }
        </div>
      </div>
    );
  }
}

export default App;
