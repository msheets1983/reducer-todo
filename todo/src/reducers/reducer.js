export const initialState = {
    todos: [
      {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
      },
    ]
  }
  
  export const reducer = (state, action) => {
    const newState = { ...state };
  
    switch(action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              item: action.payload,
              completed: false,
              id: Date.now()
            }
          ]
        }
      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map(todo => {
            if(action.payload === todo.id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }
            return { ...todo }
          })
        } 
      case "CLEAR_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo => !todo.completed)
        }
      default:
        return newState
    }
  }