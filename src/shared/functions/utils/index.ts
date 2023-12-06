export const isValuesEmpty = (obj: object) => {
  let result = false;
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      result = true;
    }
  });
  return result;
};
