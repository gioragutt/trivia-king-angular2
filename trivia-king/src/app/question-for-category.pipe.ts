import { Pipe, PipeTransform } from '@angular/core';
import { TriviaQuestions, TriviaQuestion } from './model';

@Pipe({
  name: 'questionForCategory'
})
export class QuestionForCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined || args === undefined || typeof args !== 'string') {
      return value;
    }

    const allQuestions: TriviaQuestions = value;
    const category: string = args;
    return allQuestions.filter((question: TriviaQuestion) => question.category === category);
  }
}
