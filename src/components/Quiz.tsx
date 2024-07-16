import Questions from "./questions/Questions";
import IMAGEQUIZ from "/public/quiz.svg";
import IMAGEINNOVA from "/public/Innovation.svg";
import useCategory from "../hook/useCategory";
import Categories from "./categories/Categories";
import Levels from "./levels/Levels";
import useNextQuestion from "../hook/useNextQuestion";
import Results from "./results/Results";
import { Reset } from "./btn-reset/Reset";

const Quiz = () => {
  const {
    handleCategory,
    handleLevelCategory,
    handleReset,
    isReset,
    questions,
    visibilityCategory,
    isActiveCategory,
    isVisibleImg,
    isDisabledLevel,
    isDisabledCategory,
    isActiveLevel,
    idCategory,
    bgCategory,
  } = useCategory();

  const {
    score,
    endCategory,
    nextQuestion,
    errorQuestion,
    handleResponse,
    handleResetCategory,
  } = useNextQuestion(isReset);

  return (
    <section className="w-full min-h-screen overflow-hidden bg-gradient-to-tl from-bg-primary to-primary lg:bg-gradient-to-r lg:from-bg-primary lg:to-primary">
      <article className="flex flex-col justify-evenly items-center ">
        <div className="w-full h-28 flex flex-col justify-center text-center md:bg-primary/30 md:h-32 lg:w-4/5 lg:mb-5 lg:rounded-br-xl lg:rounded-bl-xl lg:shadow-xl lg:shadow-primary/60 xl:w-1/2">
          <h2 className="font-bold text-4xl mb-3 text-primary-text md:tracking-widest lg:text-5xl">
            Quiz
          </h2>
          <h3 className="font-bold text-2xl text-primary-text lg:text-3xl md:tracking-widest">
            Selecciona una categoría
          </h3>
        </div>

        <Categories
          handleCategory={handleCategory}
          visibilityCategory={visibilityCategory}
          isActiveCategory={isActiveCategory}
          isDisabledCategory={isDisabledCategory}
        />

        <Levels
          isActiveLevel={isActiveLevel}
          isDisabledLevel={isDisabledLevel}
          handleLevelCategory={handleLevelCategory}
          idCategory={idCategory}
        />
      </article>

      <article className={`w-full flex flex-col justify-evenly items-center`}>
        <figure className={`w-2/3 md:w-80 xl:w-[350px] relative`}>
          <img
            className={`w-full drop-shadow-filter  absolute top-0 ${
              idCategory !== 0 && "animate-outImage"
            }`}
            src={IMAGEQUIZ}
            alt="imagen-quiz"
          />

          <img
            className={`w-full drop-shadow-filter absolute top-0 ${
              isVisibleImg ? "block animate-fadeIn" : "hidden"
            }`}
            src={IMAGEINNOVA}
            alt="imagen-quiz"
          />
        </figure>

        <Questions
          questions={questions}
          handleResponse={handleResponse}
          nextQuestion={nextQuestion}
          bgCategory={bgCategory}
          endCategory={endCategory}
        />

        <Results
          endCategory={endCategory}
          score={score}
          errorQuestion={errorQuestion}
        />

        <Reset
          endCategory={endCategory}
          score={score}
          handleResetCategory={handleResetCategory}
          handleReset={handleReset}
        />
      </article>
    </section>
  );
};

export default Quiz;
