import { TriviaQuestions } from './index';

export interface TriviaTeam {
    name: string;
    correctAnswers: TriviaQuestions;
}

export type TriviaTeams = TriviaTeam[];
