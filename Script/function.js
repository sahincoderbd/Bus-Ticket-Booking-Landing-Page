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


function nextButton() {
  const inputPhone = document.getElementById('inputPhone');
    

        inputPhone.addEventListener('keyup', function () {
          const getInputPhone = inputPhone.value.trim();
          console.log(getInputPhone.length);
          if (selectedSeats.length>=1 && getInputPhone.length ===11 ) {
            const nextBtn = document.getElementById('nextBtn');
            
            nextBtn.classList.remove('pointer-events-none');
            nextBtn.addEventListener('click', function () {
  const main = document.getElementById('main');
            const modal = document.getElementById('modal');
            main.style.display = 'none';
            modal.classList.remove('hidden');
})
       
          }
         else {
            nextBtn.classList.add('pointer-events-none'); 
            
          }
        });
}
