import { useEffect, useState } from "react";
import { Basic, Title } from "../types";
import Swal from "sweetalert2";

const useNextQuestion = (isReset: boolean) => {
  const [score, setScore] = useState(0);
  const [isLastQuestionAnswered, setIsLastQuestionAnswered] = useState(false);
  const [endCategory, setEndCategory] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [errorQuestion, setErrorQuestion] = useState<Title[]>([]);

  useEffect(() => {
    if (isLastQuestionAnswered) {
      if (score > 5) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Felicidades categoría terminada",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Vuelve a intentarlo 👀",
          showConfirmButton: false,
          timer: 2000,
        });
      }

      handleEndCategory(true);
      setIsLastQuestionAnswered(false);
    }
  }, [isLastQuestionAnswered, score]);

  useEffect(() => {
    if (isReset) {
      setScore(0);
      setNextQuestion(0);
      handleEndCategory(false);
      setErrorQuestion([]);
    }
  }, [isReset]);

  const handleResponse = (option: string, questions: Basic[]) => {
    const LASTQUESTION = questions.length - 1;
    const OPTION = option[0];
    const ANSWER = questions[nextQuestion].answer;

    if (ANSWER === OPTION) {
      handleScore();
    } else {
      const { id, summary, title } = questions[nextQuestion].explanation[0];
      handleErrorQuestion(id, summary, title);
    }

    if (nextQuestion === LASTQUESTION) {
      setIsLastQuestionAnswered(true);
    }

    handleNextQuestion();
  };

  const handleEndCategory = (end: boolean) => {
    setEndCategory(end);
  };

  const handleNextQuestion = () => {
    setNextQuestion((prev) => prev + 1);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const handleErrorQuestion = (id: string, summary: string, title: string) => {
    setErrorQuestion((prevErrorQuestions) => [
      ...prevErrorQuestions,
      { id, summary, title },
    ]);
  };

  const handleResetCategory = () => {
    setScore(0);
    setNextQuestion(0);
    handleEndCategory(false);
    setErrorQuestion([]);
  };

  return {
    score,
    endCategory,
    nextQuestion,
    errorQuestion,
    handleResponse,
    handleResetCategory,
  };
};
export default useNextQuestion;
