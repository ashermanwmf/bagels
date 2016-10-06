var React = require('react');
var Head = require('./Head');
var Nav = require('./Nav');
var Counter = require('./Count');
var People = require('./People');


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: props.people
		};
	}
  render() {
    return (
    	<html>
        <Head />
      <body>
        <Nav />
    		<People peopleArr={this.state.people}/>

    	</body>
    	</html>
    );
  }
}

module.exports = App;