function deepCompare<TFirstElement = any, TSecondElement = any>(
  a: TFirstElement,
  b: TSecondElement
) {
  if ((a as any) === (b as any)) {
    return true;
  }

  if (a && b && typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (let i = 0; i < aKeys.length; i++) {
      const key = aKeys[i];

      if (!deepCompare((a as any)[key], (b as any)[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

export default deepCompare;
