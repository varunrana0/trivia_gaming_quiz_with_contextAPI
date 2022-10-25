import Home from "./components/Home";
import { QuizGameStoreProvider } from "./context/Store";

function App() {
	return (
		<div className="md:h-screen h-full p-2 flex items-center justify-center">
			<QuizGameStoreProvider>
				<Home />
			</QuizGameStoreProvider>
		</div>
	);
}

export default App;
