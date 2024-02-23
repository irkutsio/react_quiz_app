import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import { Question } from './Question';
import { Summary } from './Summary';

export const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIdx = userAnswers.length;
	const quizIsComplete = activeQuestionIdx === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers(prev => {
			return [...prev, selectedAnswer];
		});
	}, []);

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				index={activeQuestionIdx}
				key={activeQuestionIdx}
				onSelect={handleSelectAnswer}
				onSkip={handleSkipAnswer}
			/>
		</div>
	);
};
