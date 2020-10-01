import { createReducer } from "typesafe-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

type CounterAction = ReturnType<typeof increase> & ReturnType<typeof decrease> & ReturnType<typeof increaseBy>;

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

const reducer = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state: { count: number }) => ({ count: state.count + 1 }),
  [DECREASE]: (state: { count: number }) => ({ count: state.count + 1 }),
  [INCREASE_BY]: (state: { count: number }, action: { payload: number }) => ({ count: state.count + action.payload })
});

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

export default reducer;
