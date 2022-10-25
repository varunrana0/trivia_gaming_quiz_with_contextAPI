import { useContext } from "react";
import { QuizGameStore } from "../context/Store";

function Error() {
	const state = useContext(QuizGameStore);
	const { error, values } = state;
	return (
		<div>
			{" "}
			{error && (
				<p className="text-red-500 bg-red-100 p-2 border-l-2 border-l-red-600">
					<span className="block">Wrong Answer</span>
					<span className="block text-green-700">
						Correct answer is {values.correctAnswer}
					</span>
				</p>
			)}
		</div>
	);
}

export default Error;
