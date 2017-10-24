console.log('react.js app is running');

// JSX Javascript XML

var template = React.createElement(
    'h1',
    { id: 'someid' },
    'Hello React.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);