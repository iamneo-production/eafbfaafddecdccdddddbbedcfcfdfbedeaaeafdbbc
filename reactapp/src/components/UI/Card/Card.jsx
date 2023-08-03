import { useState } from 'react';
import './Card.css';
import Button from '../Button/Button';

function Card({
	questionId,
	question,
	correctAnswerMarkUpdate,
	attempt,
	options,
	answer,
}) {
	const [disabled, setDisabled] = useState(false);

	const handleAnswerClick = (option) => {
		attempt();
		setDisabled(true);
		if (option === answer) {
			correctAnswerMarkUpdate();
		}
	};

	return (
		<div className="card">
			<h4 className="header">{question}</h4>
			<Button
				onClick={() => handleAnswerClick(options.option1)}
				disabled={disabled}
				className="button-option"
			>
				{options.option1}
			</Button>
			<Button
				onClick={() => handleAnswerClick(options.option2)}
				disabled={disabled}
				className="button-option"
			>
				{options.option2}
			</Button>
			<Button
				onClick={() => handleAnswerClick(options.option3)}
				disabled={disabled}
				className="button-option"
			>
				{options.option3}
			</Button>
			<Button
				onClick={() => handleAnswerClick(options.option4)}
				disabled={disabled}
				className="button-option"
			>
				{options.option4}
			</Button>
		</div>
	);
}

export default Card;
