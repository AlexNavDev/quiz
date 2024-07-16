import { Basic } from "../../types";

interface Props {
  questions: Basic[];
  handleResponse(option: string, questions: Basic[]): void;
  nextQuestion: number;
  bgCategory: string;
  endCategory: boolean;
}

const Questions = ({
  questions,
  handleResponse,
  nextQuestion,
  bgCategory,
  endCategory,
}: Props) => {
  const numberQuestions = nextQuestion + 1;
  const totalQuestions = questions.length;

  return (
    <>
      {questions[0].questionName !== "" && !endCategory && (
        <div
          className={`w-11/12 md:text-lg md:rounded-xl  ${bgCategory} lg:w-4/5`}>
          <div className="w-56 h-10 flex justify-evenly items-center m-auto font-bold tracking-wider  text-white md:h-14">
            <p className="text-xl">Pregunta</p>
            <p className="w-10 h-10 rounded-full grid place-content-center  text-xl bg-primary ">
              {numberQuestions}
            </p>
            <p className=""> / {totalQuestions}</p>
          </div>

          <p className="py-3 tracking-wide font-bold text-primary-text text-center md:bg-primary md:text-xl">
            {questions[nextQuestion]?.questionName}
          </p>
          <div className={`mt-3 rounded-md flex justify-evenly flex-wrap`}>
            {questions[nextQuestion]?.options.map((option) => (
              <button
                key={option}
                className="w-11/12 py-4 px-1 my-2 bg-primary text-white rounded-xl md:w-5/12 md:h-28"
                onClick={() => handleResponse(option, questions)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Questions;
