export function nestedObjects(props) {
    console.log('NESTED FUNCTION::::');
    
    let objects = props;

/*   let objects = [
    {
      user: { name: 'Brigita', gender: 'female' },
      category_1: 'B category-1',
      subCategory_2: 'B sub category-2',
      subCategory_3: 'B sub category-3',
    },
    {
      user: { name: 'Birute', gender: 'female' },
      category_1: 'B category-1',
      subCategory_2: 'B sub category-2',
    },
    {
      user: 'Darius',
      category_1: 'D category-1',
      subCategory_2: 'B sub category-2',
      subCategory_3: 'D sub category-3',
    },
    {
      user: 'Dainius',
      category_1: 'D category-1',
      subCategory_2: 'D sub category-2',
      subCategory_3: 'D sub category-3',
    },
  ]; */

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
  return(groups);
}
