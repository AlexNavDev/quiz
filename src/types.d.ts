export type Providers = {
  categories: Category[];
};

export type Category = {
  id: number;
  categoryName: string;
  level: Level[];
};

export type Level = {
  basic?: Basic[];
  intermediate?: Basic[];
};

export type Basic = {
  questionName: string;
  options: string[];
  answer: string;
  explanation: Title[];
};

interface Title {
  id: string;
  title: string;
  summary: string;
}
