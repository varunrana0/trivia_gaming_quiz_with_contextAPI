import Question from "./Question";
import Form from "./Form";
import Title from "./Title";
import Answers from "./Answers";

function Home() {
	return (
		<div className="px-5 py-10 md:px-10 border border-gray-200 rounded-md bg-white drop-shadow-lg">
			<Title />
			<Question />
			<Answers />
			<Form />
		</div>
	);
}

export default Home;
