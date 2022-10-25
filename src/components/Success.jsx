import { useContext } from "react";

import { QuizGameStore } from "../context/Store";

function Success() {
	const state = useContext(QuizGameStore);
	const { success, values } = state;

	return (
		<>
			{success && (
				<p className="text-green-600 bg-green-50 border-l border-l-green-600 py-3 px-2">
					you have guess the correct answer : {values.correctAnswer}
				</p>
			)}
		</>
	);
}

export default Success;
