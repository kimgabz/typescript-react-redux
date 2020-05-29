import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>Welcome to Summoner's Rift</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));