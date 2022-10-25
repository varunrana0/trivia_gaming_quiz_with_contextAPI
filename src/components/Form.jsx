import { useRef } from "react";

function Form({ values, error, setError, callQuizAgain, success, setSuccess }) {
	const guessAnswer = useRef(true);

	const handleCheckAnswer = (e) => {
		e.preventDefault();

		if (!guessAnswer.current.value) {
			return;
		}

		if (values.correctAnswer !== guessAnswer.current.value) {
			setError(true);
			setSuccess(false);

			setTimeout(() => {
				setError(false);
				setSuccess(false);
				callQuizAgain();
			}, 2000);
		}

		if (values.correctAnswer === guessAnswer.current.value) {
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
			{error && (
				<p className="text-red-500 bg-red-100 p-2 border-l-2 border-l-red-600">
					<span className="block">Wrong Answer</span>
					<span className="block text-green-700">
						Correct answer is {values.correctAnswer}
					</span>
				</p>
			)}

			{success && (
				<p className="text-green-600 bg-green-50 border-l border-l-green-600 py-3 px-2">
					you have guess the correct answer : {values.correctAnswer}
				</p>
			)}

			<div className="border-t pt-5">
				<div className="flex flex-col md:flex-row gap-3">
					<input
						ref={guessAnswer}
						type="text"
						name="text"
						className="border border-gray-200 rounded-md py-3 px-4 w-full  outline-none focus:ring-2 text-gray-600 tracking-wide font-medium focus:ring-indigo-500 ring-offset-1"
						placeholder="enter your answer here!"
					/>
					<button
						type={"submit"}
						className="inline-block py-3 px-4 border-none outline-none bg-indigo-600 text-white rounded-md capitalize font-semibold tracking-wider">
						submit
					</button>
				</div>
			</div>
		</form>
	);
}

export default Form;
