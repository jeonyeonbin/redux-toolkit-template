import { createReducer } from "typesafe-actions";

const ADD_TODOS = "todos/ADD_TODOS";
const REMOVE_TODOS = "todos/REMOVE_TODOS";
const TOGGLE_TODOS = "todos/TOGGLE_TODO";

type TodoAction = ReturnType<typeof addTodos> & ReturnType<typeof removeTodos> & ReturnType<typeof toggleTodo>;

export type TodoState = {
  id: number;
  text: string;
  done: boolean;
};

const initialState: TodoState[] = [];

const reducer = createReducer<TodoState[], TodoAction>(initialState, {
  [TOGGLE_TODOS]: (state, action) => {
    return [...state].map(({ id, text, done }) => {
      if (id === action.id) {
        return {
          id,
          text,
          done: true
        };
      }
      return {
        id,
        text,
        done
      };
    });
  },
  [ADD_TODOS]: (state, action) => {
    const id = Math.max(...state.map(({ id }) => id));
    return [...state, { id: id !== -Infinity ? id + 1 : 0, text: action.text, done: false }];
  },
  [REMOVE_TODOS]: (state, action) => state.filter(({ id }) => id !== action.id)
});

export const addTodos = (text: string) => ({ type: ADD_TODOS, text });
export const removeTodos = (id: number) => ({ type: REMOVE_TODOS, id });
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODOS, id });
export default reducer;
