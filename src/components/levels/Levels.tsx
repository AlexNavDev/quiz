interface Props {
  isActiveLevel: string;
  isDisabledLevel: boolean;
  handleLevelCategory: (nivel: number) => void;
  idCategory: number;
}

const Levels = ({
  isActiveLevel,
  isDisabledLevel,
  handleLevelCategory,
  idCategory,
}: Props) => {
  return (
    <div
      className={`w-11/12 h-36 rounded-xl flex flex-col justify-evenly items-center md:w-4/5 md:h-auto md:mb-10 lg:mt-5 lg:bg-secondary/80 lg:shadow-xl lg:shadow-primary/60 lg:rounded-xl xl:w-1/2  ${
        idCategory !== 0 ? "animate-fadeIn h-24" : "hidden"
      }`}>
      <button
        className={`w-full h-14 rounded-lg border-b-2 text-primary-text hover:bg-tertiary transition-colors ease-in-out duration-300 md:w-64 md:my-5 lg:w-1/3  ${
          isActiveLevel === "inter" && "animate-fadeOut"
        }  ${isActiveLevel === "basic" ? "bg-tertiary" : "bg-primary/55"} `}
        onClick={() => handleLevelCategory(0)}
        disabled={isDisabledLevel ? true : false}>
        Básico
      </button>
      <button
        className={`w-full h-14 rounded-lg border-b-2  text-primary-text hover:bg-tertiary transition-colors ease-in-out duration-300 md:w-64 md:mb-5 lg:w-1/3  ${
          isActiveLevel === "basic" && "animate-fadeOut"
        } ${isActiveLevel === "inter" ? "bg-tertiary" : "bg-primary/55"} `}
        onClick={() => handleLevelCategory(1)}
        disabled={isDisabledLevel ? true : false}>
        Intermedio
      </button>
    </div>
  );
};
export default Levels;
