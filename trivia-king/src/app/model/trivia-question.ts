export type TriviaQuestionState = 'hidden' | 'show_question' | 'show_answer';

export interface TriviaQuestion {
    question: string;
    answer: string;
    category: string;
    score: number;
    state: TriviaQuestionState;
};

export type TriviaQuestions = TriviaQuestion[];
