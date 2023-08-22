const arr1 = [
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 3 },
  { id: '1', quantity: 3 },
];

const arr2 = [
  { id: '1', quantity: 2 },
  { id: '3', quantity: 2 },
];

const mergeArray = (arr1, arr2) => {
  var filterArray1 = arr1.filter((x) => arr2.some((y) => y.id == x.id));
  var filterArray2 = arr2.filter((x) => arr1.some((y) => y.id == x.id));

  var result = [];
  [...filterArray1, ...filterArray2].forEach((x) => {
    var item = result.find((y) => y.id == x.id);
    if (item) {
      item.quantity += x.quantity;
    } else {
      result.push(x);
    }
  });

  return result;
};
