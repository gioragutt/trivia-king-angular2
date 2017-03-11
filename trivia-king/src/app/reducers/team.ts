import { Action, updateObject } from './index';
import { TriviaTeam, TriviaTeams } from '../model';
import { TeamActions } from '../actions';

const isTeamInState = (teams: TriviaTeams, predicate: (team: TriviaTeam) => boolean) => {
    return teams.find(predicate) !== undefined;
}

const addTeam = (state: TriviaTeams, name: string): TriviaTeams => {
    if (name === undefined || name.length === 0) {
        console.log('Trying to add team with invalid name:', name);
        return state;
    }
    if (isTeamInState(state, team => team.name === name)) {
        console.log('Team', name, 'already in teams list');
        return state;
    }
    return [...state, { name, correctAnswers: [] }];
};

const removeTeam = (state: TriviaTeams, team: TriviaTeam): TriviaTeams => {
    if (!isTeamInState(state, teamInState => teamInState === team)) {
        console.log('Trying to remove team', team, 'which is not in the teams list');
    }
    return state.filter(teamInState => teamInState !== team);
};

const renameTeam = (state: TriviaTeams, team: TriviaTeam, newName: string): TriviaTeams => {
    if (!isTeamInState(state, teamInState => teamInState === team)) {
        console.log('Trying to remove team', team, 'which is not in the teams list');
    }
    return state.map((teamInState: TriviaTeam, index: number): TriviaTeam => {
        if (teamInState === team) {
            return updateObject(team, { name: newName });
        }
        return teamInState;
    });
};

export const teams = (state: TriviaTeams = [], action: Action): TriviaTeams => {
    switch (action.type) {
        case TeamActions.TEAM_ADD:
            return addTeam(state, action.payload.name);
        case TeamActions.TEAM_REMOVE:
            return removeTeam(state, action.payload.team);
        case TeamActions.TEAM_RENAME:
            return renameTeam(state, action.payload.team, action.payload.newName);
    }
    return state;
};
