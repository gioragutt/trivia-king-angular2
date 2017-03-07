import { TriviaQuestions } from './index';

export interface TriviaTeam {
    name: string;
    correct_answers: TriviaQuestions;
}

export type TriviaTeams = TriviaTeam[];
