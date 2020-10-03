export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const updateTodo = id => ({
  type: 'UPDATE_TODO',
  id
})