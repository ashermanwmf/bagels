var React = require('react');

class People extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		people: props.peopleArr  	
    }
  }
  render() {
    return (
    	<form method='POST' action='/addToQueue'>
        <select >
          {this.state.people.map(person =>
            <option value={person.name} name={person.name} >{person.name}</option>
          )}
        </select><br />
        <input type='text' name='bagleHalfs' />
        <input type='submit' name='Submit' />
      </form>
    );
  }
}

module.exports = People;