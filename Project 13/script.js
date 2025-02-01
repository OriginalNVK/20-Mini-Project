const calculateBtn = document.getElementById('calculateBtn');
const billAmount = document.getElementById('billAmount');
const serviceRating = document.getElementById('serviceRating');
const splitCount = document.getElementById('splitCount');
const mealType = document.getElementById('mealType');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const amountPerPerson = document.getElementById('amountPerPerson');

calculateBtn.addEventListener('click', tipCalculate);
window.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        tipCalculate();
    }
})

function tipCalculate() {
    const billAmountValue = parseFloat(billAmount.value);
    const serviceRatingValue = parseFloat(serviceRating.value);
    const splitCountValue = parseInt(splitCount.value);
    const mealTypeValue = mealType.value;
    
    if (isNaN(billAmountValue) || isNaN(serviceRatingValue) || isNaN(splitCountValue)) {
        tipAmount.textContent = "Please enter a valid number";
        totalAmount.textContent = "";
        amountPerPerson.textContent = "";
        return;
    }

    let tip;
    switch (serviceRatingValue) {
        case 1:
            tip = billAmountValue * 0.05;
            break;
        case 2:
            tip = billAmountValue * 0.10;
            break;
        case 3:
            tip = billAmountValue * 0.15;
            break;
        case 4:
            tip = billAmountValue * 0.20;
            break;
    }
    let totalAmountValue = billAmountValue + tip;
    let amountPerPersonValue = totalAmountValue / splitCountValue;

    if (mealTypeValue === "dinner") {
        tip += 5;
        totalAmountValue += 5;
        amountPerPersonValue += 5;
    }

    tipAmount.textContent = `Tip: $${tip.toFixed(2)}`;
    amountPerPerson.textContent = `Amount Per Person: $${amountPerPersonValue.toFixed(2)}`;
    totalAmount.textContent = `Total Amount: $${totalAmountValue.toFixed(2)}`;
}