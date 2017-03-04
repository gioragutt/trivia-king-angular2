import { IAppState, Action, updateObject, INITIAL_STATE } from './index';
import { TriviaQuestion } from '../model';
import { Actions } from '../actions.service';

const updateQuestion = (state: IAppState, action: Action, update: any): IAppState => {
    return updateObject(state, {
        questions: state.questions.map((question: TriviaQuestion, index: number): TriviaQuestion => {
            if (question === action.payload.question) {
                return updateObject(action.payload.question, update);
            }
            return question;
        })
    });
};

export const questions = (state: IAppState = INITIAL_STATE, action: Action): IAppState => {
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
