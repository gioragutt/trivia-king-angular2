export type TriviaQuestionState = 'hidden' | 'show_question' | 'show_answer';
export type TriviaQuestionType = 'text' | 'image';

export class TriviaQuestion {
    id: number;
    question: string;
    answer: string;
    category: string;
    score: number;
    type?: TriviaQuestionType = 'text';
    state?: TriviaQuestionState = 'hidden';
};

export type TriviaQuestions = TriviaQuestion[];
