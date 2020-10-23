import React from 'react';

import TodoInput from '$Components/TodoInput';
import TodoItem from '$Components/TodoItem';
import useTodos from '$Root/hooks/useTodos';

function TodoPage() {
	const { todos } = useTodos();
	return (
		<>
			<TodoInput />
			{todos?.map(({ id, text }, index) => (
				<TodoItem key={index} {...{ id, text }} />
			))}
		</>
	);
}

export default TodoPage;
