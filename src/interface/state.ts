export interface ArrayState {
  array: Item[];
  setArray: Function;
}

export interface SectionState {
  array: Item[];
}

export interface Item {
  length: number;
  selected: 0 | 1 | 2 | 3;
}