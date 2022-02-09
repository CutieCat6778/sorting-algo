import { Item } from "../interface/state";

export function Generate(size: number): Item[] {
  const array: Item[] = [];

  for (let i = 0; i < size; i++) {
    const number = GenNum();
    array.push({
      length: number,
      selected: 0,
    });
  }
  return array;
}

export function GenNum(): number {
  return Math.floor(Math.random() * 90 + 9);
}

export function GenId(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}