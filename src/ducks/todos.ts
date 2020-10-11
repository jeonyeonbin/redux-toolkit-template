import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoState = {
	id: number;
	text: string;
	done: boolean;
};

const initialState: TodoState[] = [];

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodos: (state, action: PayloadAction<Pick<TodoState, 'text'>>) => {
			const id = Math.max(...state.map(({ id }) => id));
			state.push({
				id: id !== -Infinity ? id + 1 : 0,
				text: action.payload.text,
				done: false,
			});
		},
		removeTodos: (state, action: PayloadAction<Pick<TodoState, 'id'>>) => {
			return state.filter(({ id }) => id !== action.payload.id);
		},
		toggleTodo: (state, action: PayloadAction<Pick<TodoState, 'id'>>) => {
			return state.map(({ id, text, done }) =>
				id === action.payload.id ? { id, text, done: true } : { id, text, done }
			);
		},
	},
});

export const { addTodos, removeTodos, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
