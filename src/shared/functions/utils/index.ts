export const isValuesEmpty = (obj: object) => {
  let result = false;
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      console.log(obj[key]);
      result = true;
    }
  });
  //   console.log(value);

  return result;
};
