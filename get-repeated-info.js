const getRepeatedInfo = (input) => {
  const object = {};
  const numberArray = String(input).split("");

  numberArray.forEach((item) => {
    let value = "";
    const numeralItem = Number(item);
    for (let i = 0; i < numeralItem; i++) {
      value += item;
    }
    
    if (object[numeralItem]) {
      object[numeralItem] = `${object[numeralItem]}${value}`;

    } else {
      object[numeralItem] = value;
    }
  });

  return object;
};

export default getRepeatedInfo;