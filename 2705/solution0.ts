type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  if (obj instanceof Array) {
    return obj.reduce((acc, item) => {
      if (typeof item === "object" && item) {
        const t = compactObject(item);
        acc.push(t);
      }
      else if (item) {
        acc.push(item);
      }
      return acc;
    }, [] as Array<unknown>) as Array<JSONValue>;
  }
  const result: Record<string, JSONValue> = {};
  for (const key in obj) {
    const item = obj[key];
    if (typeof item === "object" && item) {
      const t = compactObject(item);
      result[key] = t;
    }
    else if (item) {
      result[key] = item;
    }
  }
  return result;
};
