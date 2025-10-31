export const Language = {
  self: navigator.language.toLowerCase(),
  set: (language) => {Language.current = language},
  get: () => {return Language.current},
}