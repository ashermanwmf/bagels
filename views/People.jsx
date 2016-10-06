var React = require('react');
var Options = require('./Options');

class People extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		people: props.peopleArr  	
    }
  }

  changeSelect(personName) {
    console.log(personName)
  }

  render() {
    return (
    	<form method='POST' action='/addToQueue'>
        <select>
          {this.state.people.map(person =>
            <Options person={person} selected={this.changeSelect.bind(this)}/>
          )}
        </select><br />
        <input type='text' name='bagleHalfs' />
        <input type='submit' name='Submit' />
      </form>
    );
  }
}

module.exports = People;