const getBoxesInBox = (rows, columns) => {
  return getSum(rows) * getSum(columns);
};

const getSum = limit => {
  let sum = 0;
  while (limit > 0) {
    sum += limit--;
  }
  return sum;
};

export default getBoxesInBox;
