import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { increaseBy } from "$Root/ducks/counter";
import { RootState } from "$Root/ducks";
import { fetchGithubIssueEvents } from "$Root/ducks/github";

export default function useCounter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const handleClick = useCallback(
    (value: number) => (event: React.SyntheticEvent<HTMLButtonElement>) =>
      dispatch(increaseBy(value)),
    [dispatch]
  );
  const getGithubEvents = useCallback(
    (userId: string) => {
      dispatch(fetchGithubIssueEvents(userId));
    },
    [dispatch]
  );
  return {
    counter,
    handleClick,
    getGithubEvents,
  };
}
