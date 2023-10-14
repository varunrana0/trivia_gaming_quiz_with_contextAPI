import { useRef } from "react";
import Error from "./Error";
import InputForm from "./InputForm";
import Success from "./Success";

import { useContext } from "react";
import { QuizGameStore } from "../context/Store";

function Form() {
	const state = useContext(QuizGameStore);
	const { setError, setSuccess, fetchTriviaQues, values } = state;
	const guessAnswer = useRef(true);

	const handleCheckAnswer = (e) => {
		e.preventDefault();

		if (!guessAnswer.current.value) {
			return;
		}

		if (
			values.correctAnswer.toLowerCase() !==
			guessAnswer.current.value.toLowerCase()
		) {
			setError(true);
			setSuccess(false);

			setTimeout(() => {
				setError(false);
				setSuccess(false);
				fetchTriviaQues();
			}, 2000);
		}

		if (
			values.correctAnswer.toLowerCase() ===
			guessAnswer.current.value.toLowerCase()
		) {
			setSuccess(true);
			setError(false);

			setTimeout(() => {
				setError(false);
				setSuccess(false);
				fetchTriviaQues();
			}, 2000);
		}

		guessAnswer.current.value = "";
	};

	return (
		<div className="w-full">
			<form onSubmit={handleCheckAnswer} className="w-full">
				{/* error handler */}
				<Error />

				{/* succes handler */}
				<Success />

				{/* main form */}
				<InputForm guessAnswer={guessAnswer} />
			</form>
		</div>
	);
}

export default Form;
