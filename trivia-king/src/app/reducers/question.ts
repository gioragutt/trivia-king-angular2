import { Action, updateObject, INITIAL_STATE } from './index';
import { TriviaQuestion, TriviaQuestions } from '../model';
import { Actions } from '../actions.service';

const updateQuestion = (state: TriviaQuestions, action: Action, update: any): TriviaQuestions => {
    return state.map((question: TriviaQuestion, index: number): TriviaQuestion => {
        if (question === action.payload.question) {
            return updateObject(action.payload.question, update);
        }
        return question;
    });
};

export const questions = (state: TriviaQuestions = [], action: Action): TriviaQuestions => {
    switch (action.type) {
        case Actions.QUESTION_HIDE:
            return updateQuestion(state, action, { state: 'hidden' });
        case Actions.QUESTION_SHOW_QUESTION:
            return updateQuestion(state, action, { state: 'show_question' });
        case Actions.QUESTION_SHOW_ANSWER:
            return updateQuestion(state, action, { state: 'show_answer' });
    }
    return state;
};
