import { Action, updateObject } from './index';
import { TriviaQuestion, TriviaQuestions } from '../model';
import { QuestionActions } from '../actions';

const updateQuestion = (state: TriviaQuestions, action: Action, update: any): TriviaQuestions => {
    return state.map((question: TriviaQuestion, index: number): TriviaQuestion => {
        if (question.id === action.payload.question.id) {
            return updateObject(action.payload.question, update);
        }
        return question;
    });
};

export const questions = (state: TriviaQuestions = [], action: Action): TriviaQuestions => {
    switch (action.type) {
        case QuestionActions.QUESTION_HIDE:
            return updateQuestion(state, action, { state: 'hidden' });
        case QuestionActions.QUESTION_SHOW_QUESTION:
            return updateQuestion(state, action, { state: 'show_question' });
        case QuestionActions.QUESTION_SHOW_ANSWER:
            return updateQuestion(state, action, { state: 'show_answer' });
    }
    return state;
};
