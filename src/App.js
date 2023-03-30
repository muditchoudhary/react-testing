import { useEffect, useState } from "react";

const App = () => {
	let [counter, setCounter] = useState(0);
	return (
		<div>
			<button
				data-testid="my-button"
				onClick={() => setCounter((counter) => counter + 1)}
			>
				{counter}
			</button>
		</div>
	);
};
export default App;
