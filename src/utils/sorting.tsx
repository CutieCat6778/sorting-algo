import { Item } from "../interface/state";

export async function bubble(
  array: Item[],
  setArray: Function
): Promise<number> {
  const arraaytest: Item[] = [];
  arraaytest.push(...array);

  function setCurrent(j: number) {
    const newArray: Item[] = [];
    newArray.push(...arraaytest);
    newArray[j].selected = 1;
    newArray[j + 1].selected = 2;
    setArray(newArray);
  }

  async function setNormal(j: number) {
    const newArray: Item[] = [];
    newArray.push(...arraaytest);
    newArray[j].selected = 0;
    newArray[j + 1].selected = 0;
    await new Promise((r) => setTimeout(r, 100 / (arraaytest.length * 0.5)));
    setArray(newArray);
  }

  function set() {
    const newArray: Item[] = [];
    newArray.push(...arraaytest);
    setArray(newArray);
  }

  async function swap(arr: Item[], firstIndex: number, secondIndex: number) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    await new Promise((r) => setTimeout(r, 100 / (arraaytest.length * 0.5)));
    set();
  }

  let len = arraaytest.length,
    i: number,
    j: number,
    stop;
  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arraaytest[j] && arraaytest[j + 1]) {
        if (arraaytest[j].length > arraaytest[j + 1].length) {
          setCurrent(j);
          await swap(arraaytest, j, j + 1);
          await setNormal(j);
        }
      }
    }
  }

  return 0;
}

export async function Select(rawArray: Item[], setArray: Function) {
  const array: Item[] = [];
  array.push(...rawArray);

  function setSelect(j: number) {
    const newArray = [];
    newArray.push(...array);
    newArray[j].selected = 1;
    if (j !== 0) array[j - 1].selected = 0;
    setArray(newArray);
  }
  function setSelectSec(j: number) {
    const newArray = [];
    newArray.push(...array);
    newArray[j].selected = 2;
    if (j !== 0) array[j - 1].selected = 0;
    setArray(newArray);
  }

  function compare_Function(a: number, b: number) {
    return a - b;
  }
  let min = 0;
  let index = 0;
  let temp = 0;
  for (let i = 0; i < array.length; i += 1) {
    index = i;
    min = array[i].length;
    setSelect(i);
    for (let j = i + 1; j < array.length; j += 1) {
      if (compare_Function(min, array[j].length) > 0) {
        min = array[j].length;
        setSelectSec(j);
        index = j;
      }
    }
    temp = array[i].length;
    array[i].length = min;
    array[index].length = temp;
    await new Promise((r) => setTimeout(r, 100 / (array.length * 4 * 0.5)));
  }
  return array;
}

export async function Quick(Array: Item[], setArray: Function) {
  const array: Item[] = [];
  array.push(...Array);

  function setCurrent(i: number) {
    array[i].selected = 2;
    setArray(array);
  }

  function setLeft(i: number) {
    array[i].selected = 3;
    if (i !== 0) array[i - 1].selected = 0;
    setArray(array);
  }

  function set() {
    const newArray: Item[] = [];
    newArray.push(...array);
    setArray(newArray);
  }

  async function quickSortAlgo(origArray: Item[]): Promise<Item[]> {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      let left = [];
      let right = [];
      let newArray: Item[] = [];
      let pivot = origArray.pop();
      let length = origArray.length;
      for (let i = 0; i < length; i++) {
        setCurrent(i);
        await new Promise((r) => setTimeout(r, 50 / (array.length * 8 * 0.1)));
        set();
        if (pivot && origArray[i].length <= pivot?.length) {
          setLeft(i);
          await new Promise((r) => setTimeout(r, 50 / (array.length * 8 * 0.1)));
          set();
          left.push(origArray[i]);
        } else {
          setLeft(i);
          await new Promise((r) => setTimeout(r, 50 / (array.length * 8 * 0.1)));
          set();
          right.push(origArray[i]);
        }
      }
      if (pivot)
        return newArray.concat(
          await quickSortAlgo(left),
          pivot,
          await quickSortAlgo(right)
        );
      else
        return newArray.concat(
          await quickSortAlgo(left),
          await quickSortAlgo(right)
        );
    }
  }
  const arreySorted = await quickSortAlgo(array);
  arreySorted.map(a => a.selected = 1)
  setArray(arreySorted);
}
