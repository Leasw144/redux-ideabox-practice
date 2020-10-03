import React from 'react'
import ToDo from '../components/ToDo.js'
import { connect } from 'react-redux'
import { updateTodo } from '../actions'

const ToDoList = ({ todos, updateTodo }) => {
  console.log(todos)
  const displayTodos = todos.map(todo => {
    return (
      <ToDo 
        {...todo} 
        key={todo.id} 
        updateTodo={updateTodo}/>
    )
  })
  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch =>({
  updateTodo: id => dispatch(updateTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)