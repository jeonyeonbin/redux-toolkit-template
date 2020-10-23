import React, { useEffect } from 'react';

import useCounter from '$Root/hooks/useCounter';
function Counter({}) {
	const { counter, handleClick, getGithubEvents } = useCounter();

	useEffect(() => {
		getGithubEvents('123');
	}, [counter, getGithubEvents]);
	return (
		<div>
			<h1>{counter.count}</h1>
			<button onClick={handleClick(1)}>+1</button>
			<button onClick={handleClick(-1)}>-1</button>
			<button onClick={handleClick(5)}>+5</button>
		</div>
	);
}

export default Counter;
