document.addEventListener("DOMContentLoaded", () => {
    const cash500 = document.getElementById('500k');
    const cash200 = document.getElementById('200k');
    const cash100 = document.getElementById('100k');
    const cash50 = document.getElementById('50k');
    const cash20 = document.getElementById('20k');
    const cash10 = document.getElementById('10k');
    const cash5 = document.getElementById('5k');
    const cash2 = document.getElementById('2k');
    const cash1 = document.getElementById('1k');

    const txt500 = document.getElementById('txt500k');
    const txt200 = document.getElementById('txt200k');
    const txt100 = document.getElementById('txt100k');
    const txt50 = document.getElementById('txt50k');
    const txt20 = document.getElementById('txt20k');
    const txt10 = document.getElementById('txt10k');
    const txt5 = document.getElementById('txt5k');
    const txt2 = document.getElementById('txt2k');
    const txt1 = document.getElementById('txt1k');

    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');

    const cashInputs = [cash500, cash200, cash100, cash50, cash20, cash10, cash5,
        cash2, cash1
    ]

    const cashTexts = [txt500, txt200, txt100, txt50, txt20, txt10, txt5, txt2, txt1];

    cashInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            cashCalculate(index);
        })
    })

    function cashCalculate(index) {
        const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
        const rowValue = cashInputs[index].value * denominations[index];
        cashTexts[index].textContent = rowValue.toFixed(0);

        totalCash();
    }

    function totalCash() {
        let totalCashValue = 0;
        cashTexts.forEach((text) => {
            totalCashValue += parseInt(text.textContent);
        })

        txtFinalCash.textContent = "Total Cash: " + totalCashValue;
        txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`;
    }

    btnReset.addEventListener('click', clearData);

    function clearData()
    {
        cashInputs.forEach((input) => {
            input.value = "";
        })

        cashTexts.forEach((text) => {
            text.textContent = "0";
        })
        totalCash();
    }

    cashInputs.forEach(input => {
        input.addEventListener("input", () => {
            const value = parseInt(input.value, 10);
            if (isNaN(value) || value < 0) {
                input.value = "";
            }
        })
    })

    function convertToWords(number) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    if (number === 0) {
        return "Zero";
    }

    let words = '';

    if (Math.floor(number / 1000000) > 0) {
        words += convertToWords(Math.floor(number / 1000000)) + ' Million ';
        number %= 1000000;
    }

    if (Math.floor(number / 1000) > 0) {
        words += convertToWords(Math.floor(number / 1000)) + ' Thousand ';
        number %= 1000;
    }

    if (Math.floor(number / 100) > 0) {
        words += convertToWords(Math.floor(number / 100)) + ' Hundred ';
        number %= 100;
    }

    if (number > 0) {
        if (number < 10) {
            words += units[number];
        } else if (number < 20) {
            words += teens[number - 10];
        } else {
            words += tens[Math.floor(number / 10)];
            if (number % 10 > 0) {
                words += '-' + units[number % 10];
            }
        }
    }

    return words.trim();
}

})