import { Action, updateObject } from './index';
import { TriviaTeam, TriviaTeams } from '../model';
import { TeamActions } from '../actions';

const addTeam = (state: TriviaTeams, name: string): TriviaTeams => {
    if (name === undefined || name.length === 0) {
        return state;
    }
    if (state.find((team: TriviaTeam) => team.name === name) !== undefined) {
        return state;
    }
    return [...state, { name, correctAnswers: [] }];
};

export const teams = (state: TriviaTeams = [], action: Action): TriviaTeams => {
    switch (action.type) {
        case TeamActions.TEAM_ADD:
            return addTeam(state, action.payload.name);
    }
    return state;
};
