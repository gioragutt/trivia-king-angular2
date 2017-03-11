import { TriviaQuestions, TriviaTeams } from '../model';
import { questions } from './question';
import { teams } from './team';
import { MockTriviaData, MockTriviaCategories } from '../trivia_data';
import { LocalStorageService } from '../local-storage.service';

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

const getInitialState: () => IAppState = () => {
    const state: IAppState = LocalStorageService.loadFromLocalStorage<IAppState>('state');
    if (state !== undefined) {
        console.log('successfully loaded stored state', state);
        return state;
    }

    console.log('No stored state detected, returning hard-copy data');
    return {
        questions: MockTriviaData,
        categories: MockTriviaCategories,
        teams: []
    };
};

export const INITIAL_STATE: IAppState = getInitialState();

const emptyReducer = (state = INITIAL_STATE, action) => state;

export const reducers = {
    questions,
    categories: emptyReducer,
    teams
};
