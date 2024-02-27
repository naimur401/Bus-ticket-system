const buttn = document.getElementsByClassName('button')

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.button');
  let count = 0;
  let total = 0;
  let available = 32;
  let couponApplied = false;

  buttons.forEach(btn => {
      btn.addEventListener('click', function() {
          if (count < 4 && available > 0 && !btn.classList.contains('selected')) {
              count++;
              total = count * 550;
              available--;
              btn.classList.add('selected');
          } else if (btn.classList.contains('selected')) {
              count--;
              total = count * 550;
              available++;
              btn.classList.remove('selected');
          } else {
              alert('Seat limit reached or seat already selected');
          }

          document.getElementById('cnt').textContent = count;
          document.getElementById('tk').textContent = total;
          document.getElementById('grand-total').textContent = total;
          document.getElementById('available').textContent = available;
          document.getElementById('available-2').textContent = available;
          btn.style.backgroundColor = "green";

          if (count === 4) {
              document.getElementById('applyBtn').disabled = false;
          } else {
              document.getElementById('applyBtn').disabled = true;
          }

          if (count < 4 && couponApplied) {
              cancelCoupon();
          }
      });
  });

  const applyBtn = document.getElementById('applyBtn');
  const couponInput = document.getElementById('coupon');

  applyBtn.addEventListener('click', function() {
      applyCoupon(couponInput.value);
  });

  function applyCoupon(couponValue) {
      if (couponValue === 'NEW15' && !couponApplied) {
          const discount = Math.round(total * 0.15);
          total -= discount;
          document.getElementById('grand-total').textContent = total;
          couponInput.disabled = true;
          couponApplied = true;
          applyBtn.disabled = true;
      } else if (couponValue === 'Couple 20' && !couponApplied) {
          const discount = Math.round(total * 0.20);
          total -= discount;
          document.getElementById('grand-total').textContent = total;
          couponInput.disabled = true;
          couponApplied = true;
          applyBtn.disabled = true;
      }
  }

  function cancelCoupon() {
      total = count * 550;
      document.getElementById('grand-total').textContent = total;
      couponApplied = false;
      couponInput.disabled = false;
  }
});


function scrollToMainSection(){
    const mainSection = document.getElementById('main-section');
  
        
        const scrollOptions = {
            behavior: 'smooth',
        };
  
        mainSection.scrollIntoView(scrollOptions);
  }






const buttons = document.querySelectorAll('.button');
const seatHistory = document.getElementById('new-p');
let lastClickedButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (lastClickedButton !== button) {
      if (seatHistory.children.length < 4) {
        const paragraph = document.createElement('p');
        paragraph.textContent = button.textContent.trim() + "_______________Economy" + "_______________500";
        seatHistory.appendChild(paragraph);
      } else {
        alert('You have reached the maximum number of selections.');
      }
    }
    lastClickedButton = button;
  });
});



document.getElementById('reload').addEventListener('click', function(event) {
  window.location.reload();
});



document.getElementById('coupon').addEventListener('keyup', function(event){
    const text = event.target.value
    const dlt = document.getElementById('btn-apply')
     if(text == '15% OFF'){
        dlt.removeAttribute('disabled')
      const offTk = tk * 0.8  
   }
   else{
       dlt.setAttribute('disabled', true)
    }
})

 document.getElementById('btn-apply').addEventListener('click', function(){
    const grandTotal = document.getElementById('grand-total')
    secret.style.display = 'none'
 })