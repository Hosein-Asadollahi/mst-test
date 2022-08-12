const encoder = ({ inputString, repeatCount }) => {

  for (let i = 0; i < repeatCount; i++) {
    const inputArray = inputString.split('');
    const shiftedItem = inputArray.pop();
    inputArray.unshift(shiftedItem);
    let converetdString = '';

    inputArray.forEach((item) => {

      if (item === 'z') {
        const newItem = 'a';
        converetdString += newItem;

      } else {
        const newItemCode = item.charCodeAt(0) + 1;
        const newItem = String.fromCharCode(newItemCode);
        converetdString += newItem;
      }
    })
    inputString = converetdString;
  }
  
};

export default encoder;