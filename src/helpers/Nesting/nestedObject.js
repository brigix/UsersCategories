export function nestedObjects(props) {
  let objects = props;

  /**
   * Creates nested groups by object properties.
   * `properties` array nest from highest(index = 0) to lowest level.
   *
   * @param {String[]} properties
   * @returns {Object}
   */
  function nestGroupsBy(arr, properties) {
    properties = Array.from(properties);
    if (properties.length === 1) {
      return groupBy(arr, properties[0]);
    }
    const property = properties.shift(); //selects first element of properties array and remove it
    let grouped = groupBy(arr, property);
    for (let key in grouped) {
      grouped[key] = nestGroupsBy(grouped[key], Array.from(properties)); //recursive call while properties is left
    }
    return grouped;
  }

  /**
   * Group objects by property.
   * `nestGroupsBy` helper method.
   *
   * @param {String} property
   * @param {Object[]} conversions
   * @returns {Object}
   */
  function groupBy(conversions, property) {
    return conversions.reduce((acc, obj) => {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const groups = nestGroupsBy(objects, [
    'category_1',
    'subCategory_2',
    'subCategory_3',
  ]);
  return groups;
}

export function iterate(obj) {
  Object.keys(obj).forEach(key => {
    console.log(`key: ${key}, value: ${obj[key]}`);

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      iterate(obj[key]);
    }
  });
}
