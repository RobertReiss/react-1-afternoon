import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor () {
        super();
            this.state = {
                employees: [
                    {
                      name: 'Jimmy Joe',
                      title: 'Hack0r',
                      age: 12,
                    },
                    {
                      name: 'Jeremy Schrader',
                      age: 24,
                      hairColor: 'brown'
                    },
                    {
                      name: 'Carly Armstrong',
                      title: 'CEO',
                    }
                  ],
            
                  userInput: '',
                  filteredEmployees: []
        }
    }

    handleChange (val) {
        this.setState({userInput: val})
    }

    filteredEmployees(prop) {
        let employees = this.state.employees;
        let filteredEmployees = [];

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i]);
            }
        }
        this.setState({filteredEmployees: filteredEmployees})
    }



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Unfiltered: {JSON.stringify(this.state.employees, null, 10) } </span>
                <input className="inputLine" onChange={ (event) => this.handleChange (event.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.filteredEmployees(this.state.userInput)} }> Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered : {JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
        )
    }
}