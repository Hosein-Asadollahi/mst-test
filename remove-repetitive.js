const removerRepetitive = (string) => {
  const array = string.split("");

  let counter;

  for (let i = 0; i < array.length; i++) {
    counter = 0;

    for (let j = 1; j < array.length; j++) {
      if (array[i] === array[i + j]) {
        counter++;

      } else {
        break;
      }
    }
    array.splice(i, counter);
  }
};

export default removerRepetitive;
