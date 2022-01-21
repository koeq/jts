export type List<T> = {
  value: T[];
  filter: (func: (element: T) => boolean) => List<T>;
  // map: <U>(func: (element: T) => U) => List<U>;
};

export const obj: List<string> = {
  value: ["LSKDAJF", "2", "AAA"],

  filter(checkCondition) {
    // shallow copy of obj
    const result = {
      ...this,
    };

    result.value = [];
    for (const element of this.value) {
      if (checkCondition(element)) {
        result.value.push(element);
      }
    }
    return result;
  },
};
