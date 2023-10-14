import { useContext } from "react";
import { QuizGameStore } from "../context/Store";

function Answers() {
	const state = useContext(QuizGameStore);
	const values = state.values;

	const { incorrectAnswer, correctAnswer } = values;
	const answers = [...incorrectAnswer, correctAnswer];

	return (
		<div className="mb-5 w-full">
			<div className="text-sm text-gray-500 mb-2">
				Guess one of the answer.
			</div>
			{answers && answers?.length > 0
				? answers?.map((item) => (
						<span
							key={item}
							className="inline-block mr-2 w-max bg-indigo-100 py-2 px-4 rounded-md font-medium text-gray-600">
							{item || "Loading..."}
						</span>
				  ))
				: null}
		</div>
	);
}

export default Answers;
