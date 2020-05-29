import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

const App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
}

// class App extends React.Component<AppProps, AppState> {

//     constructor(props: AppProps) {
//         super(props);

//         this.state = { counter: 0}
//     }

//     render() {
//         return <div>Welcome to Summoner's Rift</div>;
//     }
// }

ReactDOM.render(<App color="Red"/>, document.querySelector('#root'));