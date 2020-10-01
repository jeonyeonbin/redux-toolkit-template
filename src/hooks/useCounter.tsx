import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { increaseBy } from "$Root/ducks/counter";
import { RootState } from "$Root/ducks";

export default function useCounter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const handleClick = useCallback(
    (value: number) => (event: React.SyntheticEvent<HTMLButtonElement>) => dispatch(increaseBy(value)),
    [dispatch]
  );
  return {
    counter,
    handleClick
  };
}
