import React from "react";

function InputForm({ guessAnswer }) {
	return (
		<div className="border-t pt-5">
			<div className="flex flex-col md:flex-row gap-3">
				<input
					ref={guessAnswer}
					type="text"
					name="text"
					className="border border-gray-200 rounded-md py-3 px-4 w-full  outline-none focus:ring-2 text-gray-600 tracking-wide font-medium focus:ring-indigo-500 ring-offset-1"
					placeholder="enter your answer here!"
					required
				/>
				<button
					type={"submit"}
					className="inline-block py-3 px-4 border-none outline-none bg-indigo-600 text-white rounded-md capitalize font-semibold tracking-wider">
					submit
				</button>
			</div>
		</div>
	);
}

export default InputForm;
