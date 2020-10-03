export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }]
    case 'UPDATE_TODO': 
      // return console.log('fuck')
      return state.map(todo => 
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
        )
    default:
      return state;
  }
}