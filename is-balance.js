const isBalance = (input) => {
  const inputArray = input.split("");
  const acceptableResult = [1, 2];
  let result;
  let counter = 0

  while (true) {
    counter++

    for (let i = 0; i < inputArray.length - 1; i++) {
      const charCodeDifferentiate =
      inputArray[i + 1].charCodeAt(0) - inputArray[i].charCodeAt(0);

      if (acceptableResult.includes(charCodeDifferentiate)) {
        inputArray.splice(i, 2);
      }
    }

    if (inputArray.length === 0) {
      result = true;
      return result;

    } else if (counter === input.length) {
      result = false;
      return result;
    }
  }
};

export default isBalance;