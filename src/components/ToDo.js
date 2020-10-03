import React from 'react'
// import { updateTodo } from '../actions'
// import { connect } from 'react-redux'

const ToDo = ({ id, todo, completed, updateTodo}) => {
  // console.log(text)
  return (
    <li 
      onClick={() => updateTodo(id)}
      className={completed ? 'completed' : 'not-completed'}
      // style={{
      //   textDecoration: completed ? 'line-through' : 'none'
      // }}
    >
      {todo}
    </li>
  )
}

export default ToDo

