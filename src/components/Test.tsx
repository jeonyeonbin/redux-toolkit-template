import React from "react";
import Counter from "$Components/Counter";
import TodoInput from "$Components/TodoInput";
import TodoItem from "$Components/TodoItem";
import useTodos from "$Root/hooks/useTodos";

function Test() {
  const { todos } = useTodos();
  return (
    <>
      <TodoInput />
      {todos && todos.map(({ id, text }, index) => <TodoItem key={index} {...{ id, text }} />)}
      <Counter />
    </>
  );
}

export default Test;
