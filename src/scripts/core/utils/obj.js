export const object = {
  getAttributeByKey: (key, obj) => {
  }
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