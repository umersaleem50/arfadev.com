export interface IReference {
  _type: "reference";
  _ref: string;
  slug?: IPage;
}

export interface IPage {
  slug: { current: string };
}
