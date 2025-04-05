const seats = document.getElementsByClassName("seats"); 
const grandTotal = document.getElementById("grandTotal");
const seatTable = document.querySelector("table"); // Reference to table where seats appear
const maxSeats = 4;
const seatPrice = 550;
const totalSeat = 40;
const coupon = document.getElementById('coupon');
const couponInput = document.getElementById('couponInput');
const couponApplyBtn = document.getElementById('couponApplyBtn');






//Main seat selecting functionality
let selectedSeats = [];
for (let i = 0; i < seats.length; i++){
  seats[i].addEventListener('click', function () {
    const seatId = this.id;
    console.log(seatId);
    const index = selectedSeats.indexOf(seatId);
    if (index === -1) {
      if (selectedSeats.length < maxSeats) {
        selectedSeats.push(seatId);
        // set the color of button tat selected
        const selectedBtn = document.getElementById(seatId);
        selectedBtn.classList.replace('bg-[#f7f8f8]', 'bg-[#1dd100]');
        selectedBtn.classList.add('text-white');
        
        // show the seat that are selected on the table
        const tableBody = document.getElementById('tBodyId');
        const tableTrHide = document.getElementById('willHideTr');
        tableTrHide.className = 'hidden';
        const tableTr = document.createElement('tr');

        tableTr.className = 'pb-4 border-b-[#03071233] mb-3 border-collapse border-dashed h-12';
        tableTr.id = `row-${seatId}`;
        tableTr.innerHTML = `
                <td class="">${getInnerTextById(seatId)}
                    </td>
                <td>Economic</td>
                <td class="lg:text-right">${seatPrice}</td>`;
        
        tableBody.appendChild(tableTr); 

        // Price total calculation 
        let totalPriceUpdate = seatPrice * selectedSeats.length;
        totalPriceUpdate = parseInt(totalPriceUpdate);
        setInnerTextById('totalPrice', totalPriceUpdate);
        setInnerTextById('grandTotal', totalPriceUpdate);

        // Show the coupon section
        if (totalPriceUpdate >= 1650 || selectedSeats.length >= 3) {
          coupon.classList.remove('hidden');
        }

        // Price grand total
     
 

        couponApplyBtn.addEventListener('click', function () {
 
          const afterCouponApplyText = document.getElementById('afterCouponApply');
          
          // discount for new15
       const grandtotaldiscount15 = totalPriceUpdate * (15/100);
          const grandTotalUpdate15 = totalPriceUpdate - grandtotaldiscount15;
          
          // discount for couple20
           const grandtotaldiscount20 = totalPriceUpdate * (20/100);
          const grandTotalUpdate20 = totalPriceUpdate - grandtotaldiscount20;
          const input = couponInput.value;
          const inputUppercase = input.toUpperCase();
          if (totalPriceUpdate >=1650 || selectedSeats.length>= 3 ) {

            if (inputUppercase === 'NEW15') {
        setInnerTextById('grandTotal', grandTotalUpdate15);
              coupon.classList.add('hidden');
              afterCouponApplyText.classList.remove('hidden');
              afterCouponApplyText.innerHTML = `<b>Coupon Code applied!</b><br>You are saved <b>${grandtotaldiscount15}</b> BDT`;
        
          }
          else if (inputUppercase === 'COUPLE20') {
            setInnerTextById('grandTotal', grandTotalUpdate20);
              coupon.classList.add('hidden');
              afterCouponApplyText.classList.remove('hidden');
              
            afterCouponApplyText.innerHTML = `<b>Coupon Code applied!</b><br>You are saved ${grandtotaldiscount20} BDT`;

          }
          
          }
         else {
            setInnerTextById('grandTotal', totalPriceUpdate);
          }
          
        });

      
      }
      
      
      else {
        alert('You can select only 4 seat maximum');
      }
    }
   
   //if button or seat Already selected
    else {
      selectedSeats.splice(index, 1);
     const selectedBtn = document.getElementById(seatId);
     selectedBtn.classList.replace('bg-[#1dd100]', 'bg-[#f7f8f8]');
      selectedBtn.classList.replace('text-white', 'text-black');

      const rowToRemove = document.getElementById(`row-${seatId}`);
      rowToRemove.remove();
    }
// display selected seat number on the table
    const selectedSeatNumberInArray = selectedSeats.length;
    setInnerTextById('selectedSeatNumber', selectedSeatNumberInArray);

// display how many seats are left to booking
    const seatLeft = totalSeat - selectedSeatNumberInArray;
    setInnerTextById('seatLeft', seatLeft);
 
  });
  
  
}

const inputPhone = document.getElementById('inputPhone');
    

        inputPhone.addEventListener('keyup', function () {
          const getInputPhone = inputPhone.value.trim();
          console.log(getInputPhone.length);
          if (selectedSeats.length>=1 && getInputPhone.length ===11 ) {
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.classList.remove('pointer-events-none');
       
          }
         else {
            nextBtn.classList.add('pointer-events-none'); 
            
          }
        });