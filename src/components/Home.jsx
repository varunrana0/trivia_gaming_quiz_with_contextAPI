import { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Form from "./Form";
import Title from "./Title";
import Answers from "./Answers";

function Home() {
	const [values, setValues] = useState({
		question: "",
		correctAnswer: "",
		incorrectAnswer: [],
	});

	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const fetchTriviaQues = async () => {
		axios
			.get("https://opentdb.com/api.php?amount=1")
			.then((res) => {
				let data = res.data.results[0];

				setValues({
					question: data.question,
					correctAnswer: data.correct_answer,
					incorrectAnswer: data.incorrect_answers,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchTriviaQues();
	}, []);

	// console.log(values);
	return (
		<div className="px-5 py-10 md:px-10 border border-gray-200 rounded-md bg-white drop-shadow-lg">
			<Title />
			<Question values={values} />
			<Answers {...values} />
			<Form
				values={values}
				error={error}
				setError={setError}
				success={success}
				setSuccess={setSuccess}
				callQuizAgain={fetchTriviaQues}
			/>
		</div>
	);
}

export default Home;
