import { TriviaQuestion } from './trivia-question';

export interface TriviaCategory {
    name: string;
    questions: { [score: number]: TriviaQuestion };
};
