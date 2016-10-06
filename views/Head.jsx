var React = require('react');

class Nav extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
    	<head>
        <meta charset="utf-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width,height=device-height"></meta>
        <title>Bagle Queue</title>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
      </head>
    );
  }
}

module.exports = Nav;