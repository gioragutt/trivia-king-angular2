import { TriviaQuestions } from './model';

export const MockTriviaCategories: string[] = function() {
    const categories: string[] = [];
    for (let i = 1; i <= 10; ++i) {
        categories.push('category' + i);
    }
    return categories;
}();

const stringOfRandomSizeBetween = (min: number, max: number): string => {
    let text = '';
    const possible = 'קראטוןםפשדגכעיחלךףזסבהנמצתץ0123456789          ';

    for (let i = 0; i < Math.random() * 100; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const MockTriviaData: TriviaQuestions = function() {
    const questions: TriviaQuestions = [];
    MockTriviaCategories.forEach((category: string, index: number) => {
        for (let i = 1; i <= 5; ++i) {
            questions.push({
                score: 100 * i,
                answer: 'תשובה: ' + stringOfRandomSizeBetween(10, 50),
                question: 'שאלה: ' + stringOfRandomSizeBetween(10, 50),
                category,
                state: 'hidden'
            });
        }
    });
    return questions;
}();
