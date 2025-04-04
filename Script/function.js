console.log('function.js is connected');


// Get element ID


function getInnerTextById(elementId) {
  const getElement = document.getElementById(elementId);
  const seatSerial = getElement.innerText;
  return seatSerial;
}


function setInnerTextById(elementId,number) {
  const getInnerText = document.getElementById(elementId);
  getInnerText.innerText = number;
}

