import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {

    render() {
        return <div>Welcome to Summoner's Rift</div>;
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
}

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);