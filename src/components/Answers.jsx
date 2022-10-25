import { useContext } from "react";
import { QuizGameStore } from "../context/Store";

function Answers() {
	const state = useContext(QuizGameStore);
	const values = state.values;

	const { incorrectAnswer, correctAnswer } = values;
	const answers = [...incorrectAnswer, correctAnswer];

	return (
		<div className="mb-5">
			<div className="text-sm text-gray-500 mb-2">Guess one of the answer.</div>
			<div className="grid md:grid-cols-2 gap-3 ">
				{answers &&
					answers.map((item) => (
						<span
							key={item}
							className="flex flex-wrap bg-indigo-100 py-2 px-4 rounded-md font-medium w-fit text-gray-600 ">
							{item}
						</span>
					))}
			</div>
		</div>
	);
}

export default Answers;
