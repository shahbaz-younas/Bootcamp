import { QuestionType, QuizType } from './../Types/quize_type';
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)
export const getquize = async (totalQuestions: number, level: string): Promise<QuizType[]> => {
    let res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();

    const quiz = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}
