import React, { useState } from 'react';

import useTodos from '$Root/hooks/useTodos';

const TodoInput: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const { addTodoItem } = useTodos();
	const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();

		addTodoItem(value);
		setValue('');
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		setValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
			<button type="submit">등록</button>
		</form>
	);
};
export default TodoInput;
