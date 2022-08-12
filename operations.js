const operations = (ops) => {
  const string = ops.replace(/ /g, "");
  const array = string.split("");
  const resultArray = [];

  // finding negetive numbers

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "-") {
      const negNumb = "-" + array[i + 1];
      array.splice(i, 2, negNumb);
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "D") {
      const newItem = Math.abs(resultArray[resultArray.length - 1]) * 2;
      resultArray.push(newItem);

    } else if (array[i] === "R") {
      resultArray.pop();
      
    } else if (array[i] === "+") {
      const newItem =
        resultArray[resultArray.length - 1] +
        resultArray[resultArray.length - 2];
      resultArray.push(newItem);
    }

    if (array[i] !== "+" && array[i] !== "R" && array[i] !== "D") {
      resultArray.push(+array[i]);
    }
  }
  const result = resultArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return result;
};

export default operations;