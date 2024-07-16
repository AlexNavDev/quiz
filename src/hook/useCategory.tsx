import { useEffect, useState } from "react";
import { Basic } from "../types";
import quiz from "../data/questions.json";

const useCategory = () => {
  const initialQuestions: Basic[] = [
    {
      questionName: "",
      options: [],
      answer: "",
      explanation: [],
    },
  ];

  interface ICategory {
    name: string;
    active: boolean;
  }

  const initialCategories: ICategory[] = [
    { name: "javascript", active: true },
    { name: "html", active: true },
    { name: "css", active: true },
    { name: "react", active: true },
    { name: "random", active: true },
  ];

  const [idCategory, setIdCategory] = useState(0);
  const [questions, setQuestions] = useState<Basic[]>(initialQuestions);
  const [isVisibleImg, setIsVisibleImg] = useState(false);
  const [isDisabledCategory, setIsDisabledCategory] = useState(false);
  const [isDisabledLevel, setIsDisabledLevel] = useState(false);
  const [isActiveLevel, setIsActiveLevel] = useState("");
  const [isActiveCategory, setIsActiveCategory] = useState("");
  const [bgCategory, setIsBgCategory] = useState("");
  const [visibilityCategory, setVisibilityCategory] =
    useState<ICategory[]>(initialCategories);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    const categories = ["javascript", "html", "css", "react"];

    if (categories.includes(isActiveCategory)) {
      handleCategoryClick(isActiveCategory);
    }
  }, [idCategory]);

  const handleCategory = (id: number): void => {
    const categories = ["javascript", "html", "css", "react"];
    const category = categories[id - 1];

    if (id === 1) {
      setIsBgCategory(`md:bg-javascript/85`);
    }
    if (id === 2) {
      setIsBgCategory(`md:bg-html/85`);
    }
    if (id === 3) {
      setIsBgCategory(`md:bg-css/85`);
    }
    if (id === 4) {
      setIsBgCategory(`md:bg-react/85`);
    }

    setIsActiveCategory(category);
    setIdCategory(id);

    if (id === 5) {
      const randomCategory = Math.ceil(Math.random() * 4);
      setIdCategory(randomCategory);
      setIsActiveCategory(categories[randomCategory - 1]);
      setIsBgCategory(`md:bg-${categories[randomCategory - 1]}/85`);
    }
    setIsDisabledCategory(true);
    setIsVisibleImg(true);
  };

  const handleLevelCategory = (level: number) => {
    const selectedCategory = quiz.categories.find(
      (cat) => cat.id === idCategory
    );

    if (!selectedCategory) return;
    setIsDisabledLevel(true);
    setIsReset(false);

    level === 0 ? setIsActiveLevel("basic") : setIsActiveLevel("inter");

    const selectCategory =
      level === 0
        ? selectedCategory.level[level]?.basic ?? []
        : selectedCategory.level[level]?.intermediate ?? [];

    const randomQuestions = selectCategory.sort(() => Math.random() - 0.5);

    setQuestions(randomQuestions);
    handleCategoryClick(isActiveCategory);
    setIsVisibleImg(false);
  };

  const handleCategoryClick = (selectedCategory: string) => {
    const updatedCategories = visibilityCategory.map((category) => {
      if (category.name !== selectedCategory) {
        return { ...category, active: false };
      }
      return category;
    });
    setVisibilityCategory(updatedCategories);
  };

  const handleReset = () => {
    setIsReset(true);
    setIsVisibleImg(false);
    setIsDisabledLevel(false);
    setIsDisabledCategory(false);
    setIdCategory(0);
    setQuestions(initialQuestions);
    setIsActiveCategory("");
    setIsActiveLevel("");
    setVisibilityCategory(initialCategories);
  };

  return {
    handleCategory,
    handleLevelCategory,
    handleReset,
    isReset,
    questions,
    visibilityCategory,
    isActiveCategory,
    isVisibleImg,
    isDisabledCategory,
    isDisabledLevel,
    isActiveLevel,
    idCategory,
    bgCategory,
  };
};
export default useCategory;
