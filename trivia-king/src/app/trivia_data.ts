import { TriviaQuestions } from './model';

const stringOfRandomSizeBetween = (min: number, max: number): string => {
    let text = '';
    const possible = 'קראטוןםפשדגכעיחלךףזסבהנמצתץ0123456789          ';

    for (let i = 0; i < Math.random() * 100; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const MockTriviaCategories: string[] = function() {
    const categories: string[] = [];
    for (let i = 1; i <= 10; ++i) {
        categories.push(stringOfRandomSizeBetween(10, 20));
    }
    return categories;
}();

export const MockTriviaData: TriviaQuestions = function() {
    const questions: TriviaQuestions = [];
    var id = 0;
    MockTriviaCategories.forEach((category: string, index: number) => {
        for (let i = 1; i <= 5; ++i) {
            questions.push({
                id: id++,
                score: 100 * i,
                answer: stringOfRandomSizeBetween(10, 50),
                question: stringOfRandomSizeBetween(10, 50),
                category
            });
        }
    });
    return questions;
}();
