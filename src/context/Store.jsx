import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const QuizGameStore = createContext();

export const QuizGameStoreProvider = ({ children }) => {
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

	const Data = {
		values,
		error,
		setError,
		success,
		setSuccess,
		fetchTriviaQues,
	};

	return (
		<QuizGameStore.Provider value={Data}>{children}</QuizGameStore.Provider>
	);
};
