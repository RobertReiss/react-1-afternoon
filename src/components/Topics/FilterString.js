import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor () {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        };
    }

    handleChange(val) {
        console.log(val)
        this.setState({userInput: val})
    }

    filterNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i]);
            }
        }

        this.setState({filteredNames: filteredNames})
    }

    render() {
        console.log(this.state.userInput)
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names:{JSON.stringify(this.state.names, null, 10)} </span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)} </span>
            </div>
        )
    }
}