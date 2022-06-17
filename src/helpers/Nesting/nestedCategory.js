export class Category {
  category_1 = '';
  subCategory_2 = '';
  subCategory_3 = '';

  constructor(props) {
    this.category_1 = props.category_1;
    this.subCategory_2 = props.subCategory_2;
    this.subCategory_3 = props.subCategory_3;
  }
}

// I LEAVE THIS THERE FOR MYSELF LEARNING
//DEFINETLY NEED TO LEARN DEEP NESTING

export function NestedCategoryArr(nestedCategoryArray, { ...props }) {
  const cat1 = props.category_1;
  const sub_cat2 = props.subCategory_2;
  const sub_cat3 = props.subCategory_3;

  const nestedCat = [];
  const nestedSubCat2 = [];
  const nestedSubCat3 = [];

  nestedSubCat3.push({ subCategory_3: sub_cat3 });
  nestedSubCat2.push({
    subCategory_2: sub_cat2,
    subCategory_3: nestedSubCat3,
  });
  nestedCat.push({ category_1: cat1, subCategory_2: nestedSubCat2 });

  /*   if (nestedCategoryArray.length === 0) {
    nestedCategoryArray = nestedCat;
  } */

  /*   nestedCat.forEach(nc => {
    console.log('1 level: ', nc['category_1']);
    console.log('1 level cat2: ', nc.subCategory_2);
    nc.subCategory_2.forEach(nc2 => {
      console.log('2level: ', nc2['subCategory_2']);
      console.log('2level cat3: ', nc2.subCategory_3);
      nc2.subCategory_3.forEach(nc3 => {
        console.log('3 level: ', nc3.subCategory_3);
      });
    });
  }); */

  const updatedArr = nestedCat.map(nca =>
    nca['category_1'] === cat1
      ? nca.subCategory_2.map(nca2 =>
          nca2['subCategory_2'] === sub_cat2
            ? nca2.subCategory_3.map(nca3 =>
                nca3 === sub_cat3
                  ? alert('CATEGORY EXISTS')
                  : nca2.subCategory_3.push(sub_cat3)
              )
            : nca2.subCategory_2.push(sub_cat2)
        )
      : nca.push(cat1)
  );

  return updatedArr;
}
