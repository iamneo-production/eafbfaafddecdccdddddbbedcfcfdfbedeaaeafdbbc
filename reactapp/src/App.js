import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';

const quizQuestions = [
	{
		questionId: 1,
		question: 'What color is are the wood ?',
		option1: 'Blue',
		option2: 'Red',
		option3: 'Brown',
		option4: 'Green',
		answer: 'Brown',
	},
	{
		questionId: 2,
		question: 'What color is are the leaves ?',
		option1: 'Blue',
		option2: 'Red',
		option3: 'Yellow',
		option4: 'Green',
		answer: 'Green',
	},
];

function App() {
	const [isQuizStarted, setIsQuizStarted] = useState(false);
	const [correctAnswersCount, setCorrectAnswers] = useState(0);
	const [questionsAnswered, setQuestionsAnswered] = useState(0);
	const [isQuizAttempted, setIsQuizAttempted] = useState(false);

	function correctAnswerMarkUpdate() {
		setCorrectAnswers((p) => p + 1);
	}

	function startQuiz() {
		setCorrectAnswers(0);
		setIsQuizStarted(true);
	}

	function attempt() {
		setIsQuizAttempted(true);
		setQuestionsAnswered((p) => p + 1);
	}

	function showResultsHandler() {
		setIsQuizStarted(false);
		setQuestionsAnswered(0);
	}

	return (
		<div className="App">
			<h1>Quizz App</h1>
			{isQuizStarted ? (
				<div className="card-wrapper">
					{quizQuestions.map(
						({
							questionId,
							question,
							option1,
							option2,
							option3,
							option4,
							answer,
						}) => (
							<Card
								key={questionId}
								questionId={questionId}
								question={question}
								options={{
									option1,
									option2,
									option3,
									option4,
								}}
								attempt={attempt}
								correctAnswerMarkUpdate={correctAnswerMarkUpdate}
								answer={answer}
							/>
						)
					)}
					{questionsAnswered === quizQuestions.length && (
						<Button className="button-result" onClick={showResultsHandler}>
							Show Results
						</Button>
					)}
				</div>
			) : (
				<div className="quiz-wrapper">
					{isQuizAttempted && (
						<p className="result">
							You have answered {correctAnswersCount}/{quizQuestions.length}{' '}
							correctly
						</p>
					)}
					<Button className="button-start" onClick={startQuiz}>
						Start Quiz
					</Button>
				</div>
			)}
		</div>
	);
}

export default App;
