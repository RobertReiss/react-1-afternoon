import React, {Component} from 'react';

export default class EvenAndOdd extends Component{
    constructor () {
        super ();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',');
        let evens = []
        let odds = []

        for (let i=0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }

        this.setState({evenArray: evens, oddsArray: odds})
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)} }> Split </button>
                <span className="resultsBox"> Evens Array: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds Array: {JSON.stringify(this.state.oddsArray)} </span>
            </div>
        )
    }
}