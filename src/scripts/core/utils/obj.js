export const object = {
  getAttributeByKey: (key, obj) => {},
  getAttributeByValue: (value, obj) => {}
}

object.getAttributeByKey = (key, obj) => {
  if (typeof obj !== "object" || obj === null) return undefined;
  if (obj.hasOwnProperty(key)) return obj[key];
  for (const subkey in obj) {
    if (!Object.hasOwn(obj, subkey)) continue;   
    const value = object.getAttributeByKey(key, obj[subkey]);
    if (value !== undefined) return value;    
  }
  return undefined;
}

object.getAttributeByValue = (value, obj) => {
  if (typeof obj !== "object" || obj === null) return undefined;

  for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    const currentValue = obj[key];

    if (typeof currentValue === "string" && typeof value === "string") {
      if (currentValue.toLowerCase() === value.toLowerCase()) return key;
    } 
    else if (currentValue === value) {
      return key;
    }
    if (typeof currentValue === "object" && currentValue !== null) {
      const foundKey = object.getAttributeByValue(value, currentValue);
      if (foundKey !== undefined) return foundKey;
    }
  }
  return undefined;
};