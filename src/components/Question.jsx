import { useContext } from "react";
import { QuizGameStore } from "../context/Store";

function Question() {
	const state = useContext(QuizGameStore);
	const values = state.values;

	return (
		<div className="mb-10 w-full">
			<small className="text-gray-500 inline-block border-b w-full mb-2">
				Answer the following <b className="text-black">question ?</b>
			</small>
			<p className="text-lg font-bold text-gray-800 md:max-w-2xl">
				{values.question || "loading..."}
			</p>
		</div>
	);
}

export default Question;
