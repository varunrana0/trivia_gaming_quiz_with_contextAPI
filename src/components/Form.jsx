import { useRef } from "react";
import Error from "./Error";
import InputForm from "./InputForm";
import Success from "./Success";

function Form({ values, error, setError, callQuizAgain, success, setSuccess }) {
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
				callQuizAgain();
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
				callQuizAgain();
			}, 2000);
		}

		guessAnswer.current.value = "";
	};

	return (
		<form onSubmit={handleCheckAnswer}>
			{/* error handler */}
			<Error error={error} values={values} />

			{/* succes handler */}
			<Success success={success} values={values} />

			{/* main form */}
			<InputForm guessAnswer={guessAnswer} />
		</form>
	);
}

export default Form;
