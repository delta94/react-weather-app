import React from 'react';
import ResultCard from './ResultCard';

let pluralize = require('pluralize');

export default class LoadedResults extends React.Component {

   componentDidMount() {
        document.getElementById('loaded-results').scrollTo(0,0)
    }
    
    componentDidUpdate() {
        document.getElementById('loaded-results').scrollTo(0,0)
    }

    render() {
        const cityList = this.props.results.list;
        return (
            <div id="loaded-results">
                <h3 id='num-results' className='fadeIn'>
                    Found {this.props.results.cnt} {pluralize('city', this.props.results.cnt)} named <span id='city-name'>{cityList[0].name}</span>
                </h3>
                <ul id='city-list'>
                    {cityList.map((city, index) =>
                        <ResultCard emptyOut={this.props.emptyResults} waitTime={(index+1)*200} key={city.id.toString()} city={city} unit={this.props.unit}/>
                    )}
                </ul>
            </div>
        );
    }
}