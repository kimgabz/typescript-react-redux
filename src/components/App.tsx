import React from 'react';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }

    onButtonCLick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true})
    }

    onTodoCLick = (id: number): void => {
        this.props.deleteTodo(id);
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div onClick={() => this.onTodoCLick(todo.id)} 
                     key={ todo.id }>
                         { todo.title }
                    </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div>Welcome to Summoner's Rift</div>
                <button onClick={this.onButtonCLick}>Fetch</button>
                { this.state.fetching ? 'LOADING' : null }
                { this.renderList() }
            </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
}

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(_App);