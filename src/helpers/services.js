export const PascalCase = str => {
  return str.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

export const convertObjectToArray = (obj) => {
    const array = Object.keys(obj).map(function (key) {
      return obj[key];
    });
    return array;
}
