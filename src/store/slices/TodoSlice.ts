import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITodo from '../../types/ITodo';

interface TodoState {
  list: ITodo[],
}

const initialState: TodoState = {
  list: []
}


const todoSlice = createSlice({
  name: 'TodoSlice',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      if(action.payload) {
        state.list.push({
          id: Date.now(),
          name: action.payload,
          complete: false,
        })
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter(todo => todo.id !== action.payload)
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state.list.forEach(todo => {
        if (todo.id === action.payload) {
          todo.complete = !todo.complete
        } 
      })
    }
  },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
