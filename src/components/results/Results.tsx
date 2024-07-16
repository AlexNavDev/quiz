import { Title } from "../../types";

interface Props {
  endCategory: boolean;
  score: number;
  errorQuestion: Title[];
}

const Results = ({ endCategory, score, errorQuestion }: Props) => {
  return (
    <>
      {endCategory && score > 5 && (
        <div className="w-11/12 h-48 flex flex-col justify-evenly items-center rounded-xl bg-primary md:w-4/5 lg:mt-5 xl:w-1/2">
          <p className="text-2xl font-bold text-primary-text">
            Felicidades obtuviste
          </p>

          <p className="w-10 h-10 grid place-content-center rounded-full font-bold text-2xl text-primary-text bg-tertiary ">
            {score}
          </p>

          <p className="text-2xl font-bold text-primary-text">Aciertos </p>
          {score >= 9 && <p className="text-4xl">🏆</p>}
        </div>
      )}

      {endCategory && score < 10 && (
        <div className="scrollbar w-11/12 max-h-96 min-h-40 relative mt-5 overflow-y-auto rounded-tl-lg rounded-tr-lg lg:w-4/5 bg-secondary xl:w-1/2">
          <h3 className="text-center text-2xl sticky top-0 bg-primary text-primary-text font-bold py-3">
            Temas a repasar
          </h3>
          {errorQuestion.map((question) => (
            <details className="mb-2 text-primary-text" key={question.id}>
              <summary className="bg-tertiary p-3">{question.title}</summary>
              <p className="p-2 bg-secondary text-primary-text">
                {question.summary}
              </p>
            </details>
          ))}
        </div>
      )}
    </>
  );
};
export default Results;
