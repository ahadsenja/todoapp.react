import React from 'react'
import TodoForm from './TodoForm'


class Todo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            term: '',
            todos: []
        }
    }

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            todos: [...this.state.todos, this.state.term]
        })
    }

    render() {
        return (
            <div>
                <TodoForm
                    dataState={this.state}
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default Todo