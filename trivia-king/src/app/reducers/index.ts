import { TriviaQuestions } from '../model';
import { questions } from './question';
import { MockTriviaData, MockTriviaCategories } from '../trivia_data';

export interface Action {
    type: string;
    payload: any;
}

export interface IAppState {
    questions: TriviaQuestions;
    categories: string[];
};

export const updateObject = (object: any, update: any): any => {
    return Object.assign({}, object, update);
};

export const INITIAL_STATE: IAppState = {
    questions: MockTriviaData,
    categories: MockTriviaCategories
};

const emptyReducer = (state = INITIAL_STATE, action) => state;

export const reducers = {
    questions,
    categories: emptyReducer
};
