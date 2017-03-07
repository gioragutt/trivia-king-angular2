import { TriviaQuestions, TriviaTeams } from '../model';
import { questions } from './question';
import { teams } from './team';
import { MockTriviaData, MockTriviaCategories } from '../trivia_data';

export interface Action {
    type: string;
    payload: any;
}

export interface IAppState {
    questions: TriviaQuestions;
    categories: string[];
    teams: TriviaTeams;
};

export const updateObject = (object: any, update: any): any => {
    return Object.assign({}, object, update);
};

export const INITIAL_STATE: IAppState = {
    questions: MockTriviaData,
    categories: MockTriviaCategories,
    teams: [
        {
            name: 'team1', correctAnswers: []
        },
        {
            name: 'team2', correctAnswers: []
        },
        {
            name: 'team3', correctAnswers: []
        }
    ]
};

const emptyReducer = (state = INITIAL_STATE, action) => state;

export const reducers = {
    questions,
    categories: emptyReducer,
    teams
};
