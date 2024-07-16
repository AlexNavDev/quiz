import IMAGEJS from "/public/javascript.svg";
import IMAGEHTML from "/public/html.svg";
import IMAGECSS from "/public/css.svg";
import IMAGEREACT from "/public/react.svg";

interface Category {
  name: string;
  active: boolean;
}

interface Props {
  handleCategory: (id: number) => void;
  visibilityCategory: Category[];
  isActiveCategory: string;
  isDisabledCategory: boolean;
}

const Categories = ({
  handleCategory,
  visibilityCategory,
  isActiveCategory,
  isDisabledCategory,
}: Props) => {
  return (
    <div className="w-11/12 mb-3 text-lg flex justify-evenly items-center flex-wrap md:w-4/5 md:py-5 lg:my-3 lg:rounded-xl xl:w-1/2 lg:bg-secondary/80 lg:shadow-xl lg:shadow-primary/60">
      <button
        className={`w-full h-14 relative my-3 rounded-lg hover:bg-javascript/75 hover:text-primary border-b-2 font-bold tracking-wider transition-colors ease-in-out duration-300 md:w-64 md:mx-1 lg:w-1/3
              ${!visibilityCategory[0].active && "animate-fadeOut"}   
            ${
              isActiveCategory === "javascript"
                ? "bg-javascript/75 text-primary"
                : "bg-primary text-secondary-text"
            }`}
        disabled={isDisabledCategory ? true : false}
        onClick={() => handleCategory(1)}>
        JavaScript
        <span>
          <img
            className="w-8 absolute top-3 right-8 md:right-5"
            src={IMAGEJS}
            alt="JavaScript"
          />
        </span>
      </button>

      <button
        className={`w-full h-14 relative my-3 rounded-lg hover:bg-html/75 hover:text-primary border-b-2 font-bold tracking-wider transition-colors ease-in-out duration-300 md:w-64 md:mx-1 lg:w-1/3 
              ${!visibilityCategory[1].active && "animate-fadeOut"}
               ${
                 isActiveCategory === "html"
                   ? "bg-html/75 text-primary"
                   : "bg-primary text-secondary-text "
               }`}
        disabled={isDisabledCategory ? true : false}
        onClick={() => handleCategory(2)}>
        HTML
        <span>
          <img
            className="w-8 absolute top-3 right-8 md:right-5"
            src={IMAGEHTML}
            alt="HTML"
          />
        </span>
      </button>

      <button
        className={`w-full h-14 relative my-3 rounded-lg hover:bg-css/75 hover:text-primary border-b-2 font-bold tracking-wider transition-colors ease-in-out duration-300 md:w-64 md:mx-1 lg:w-1/3 
              ${!visibilityCategory[2].active && "animate-fadeOut"}
              ${
                isActiveCategory === "css"
                  ? "bg-css/75 text-primary"
                  : "bg-primary text-secondary-text "
              }`}
        disabled={isDisabledCategory ? true : false}
        onClick={() => handleCategory(3)}>
        Css
        <span>
          <img
            className="w-8 absolute top-3 right-8 md:right-5"
            src={IMAGECSS}
            alt="CSS"
          />
        </span>
      </button>

      <button
        className={`w-full h-14 relative my-3 rounded-lg hover:bg-react/75 hover:text-primary border-b-2 font-bold tracking-wider transition-colors ease-in-out duration-300 md:w-64 md:mx-1 lg:w-1/3 disabled
              ${!visibilityCategory[3].active && "animate-fadeOut"}
              ${
                isActiveCategory === "react"
                  ? "bg-react/75 text-primary"
                  : "bg-primary text-secondary-text "
              }`}
        disabled={isDisabledCategory ? true : false}
        onClick={() => handleCategory(4)}>
        React
        <span>
          <img
            className="w-8 absolute top-3 right-8 md:right-5"
            src={IMAGEREACT}
            alt="React"
          />
        </span>
      </button>

      <button
        className={`w-full h-14 relative my-3 rounded-lg hover:bg-tertiary/75 hover:text-primary border-b-2 font-bold tracking-wider transition-colors ease-in-out duration-300 md:w-64 md:mx-1 lg:w-1/3 bg-primary/75 text-secondary-text
              ${!visibilityCategory[4].active && "animate-fadeOut"}
        `}
        onClick={() => handleCategory(5)}>
        Aleatorio
      </button>
    </div>
  );
};
export default Categories;
