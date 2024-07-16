interface Props {
  endCategory: boolean;
  score: number;
  handleResetCategory: () => void;
  handleReset: () => void;
}

export const Reset = ({
  endCategory,
  score,
  handleResetCategory,
  handleReset,
}: Props) => {
  return (
    <>
      {endCategory && (
        <div className="w-11/12 flex flex-col items-center">
          {score < 10 && (
            <button
              className="w-11/12 h-14 my-3 font-bold rounded-lg  border-b-2 hover:bg-tertiary transition-colors ease-in .3 text-primary-text bg-primary md:w-1/3 lg:w-1/6"
              onClick={handleResetCategory}>
              Reiniciar
            </button>
          )}

          <button
            className="w-11/12 h-14 my-3 font-bold rounded-lg  border-b-2 hover:bg-tertiary transition-colors ease-in .3 text-primary-text bg-primary md:w-1/3 lg:w-1/6"
            onClick={handleReset}>
            Inicio
          </button>
        </div>
      )}
    </>
  );
};
