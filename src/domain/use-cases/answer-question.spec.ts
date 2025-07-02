import { Answer } from "../entities/answer";
import { AnswersRepository } from '../repositories/answers-repository';
import { AnswerQuestionUseCase } from './answer-question';

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  }
}


test('create an answer', async () => {
  const sut = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await sut.execute({
    instructorId: '1',
    questionId: '1',
    content: 'This is an answer',
  });

  expect(answer.content).toBe('This is an answer');
})
