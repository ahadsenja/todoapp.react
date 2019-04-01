import React from 'react'
import { Button } from 'reactstrap'
import TodoList from './TodoList'


class TodoForm extends React.Component {

    render() {
        const { term, todos } = this.props.dataState

        return (
            <div>
                <div className='container'>
                    <h3>Todo List Items</h3>
                    <form onSubmit={this.props.onSubmit}>
                        <input type="text" name='name' value={term} onChange={this.props.handleChange} className='form-control' />
                        <br/>
                        <Button color='primary'>+ Add</Button>
                    </form>

                    <TodoList todos={todos}></TodoList>
                </div>
            </div>
        )
    }
}

export default TodoForm