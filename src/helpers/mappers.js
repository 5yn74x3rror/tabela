import { getKeys } from '.';

export const valuesMapper = data => {
  const keys = getKeys(data);
  const validationObj = {};
  const arrayTypes = [];

  keys.forEach(key => {
    validationObj[key] = [];
  });

  data.forEach(el => {
    keys.forEach(key => {
      validationObj[key].push(el[key]);
    });
  });

  keys.forEach(key => {
    const valuesAreNumbers = validationObj[key].every(el => typeof el === 'number');
    const valuesAreStrings = validationObj[key].every(el => typeof el === 'string');
    if (valuesAreNumbers) {
      arrayTypes.push('Numbers');
    } else if (valuesAreStrings) {
      arrayTypes.push('Strings');
    } else {
      arrayTypes.push('Unknown');
    }
  });

  return arrayTypes;
};

export default {};
