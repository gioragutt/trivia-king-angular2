import { Action, updateObject } from './index';
import { TriviaTeam, TriviaTeams, TriviaQuestion } from '../model';
import { TeamActions } from '../actions';

const isTeamInState = (teams: TriviaTeams, predicate: (team: TriviaTeam) => boolean) => {
    return teams.find(predicate) !== undefined;
};

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

const removeCorrectAnswer = (state: TriviaTeams, question: TriviaQuestion): TriviaTeams => {
    return state.map((team: TriviaTeam): TriviaTeam => {
        if (team.correctAnswers.includes(question)) {
            return updateObject(team, { correctAnswers: team.correctAnswers.filter(q => q.id !== question.id) });
        }
        return team;
    });
};

const assignCorrectAnswerToTeam = (state: TriviaTeams, teamName: string, question: TriviaQuestion): TriviaTeams => {
    const removedQuestionState = removeCorrectAnswer(state, question);
    return removedQuestionState.map((team: TriviaTeam): TriviaTeam => {
        if (team.name === teamName) {
            if (team.correctAnswers.find(q => q.id === question.id) !== undefined) {
                return team;
            }
            return updateObject(team, { correctAnswers: [...team.correctAnswers, question] });
        }
        return team;
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
        case TeamActions.TEAM_ASSIGN_CORRECT_ANSWER:
            return assignCorrectAnswerToTeam(state, action.payload.teamName, action.payload.question);
        case TeamActions.TEAM_REMOVE_CORRECT_ANSWER:
            return removeCorrectAnswer(state, action.payload.question);
    }
    return state;
};
