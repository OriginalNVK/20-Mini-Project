document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const highFeet = parseInt(document.getElementById('high-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (gender && age && highFeet && heightInches && highFeet)
    {
        const heightInMeters = ((highFeet * 12) + heightInches) * 0.0254;
        const bmi = weight / (heightInMeters);
        const resultElement = document.getElementById('result');
        let category = ``;
        if (bmi < 18.5) {
            category = 'Under Weight';
        }
        else if (bmt < 24.9) {
            category='Normal Weight'
        }
        else if(category < 29.9){
            category = 'Over Weight';
        }
        else {
            category = 'obese';
        }

        let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;
        resultElement.innerHTML = resultMessage;
    }
})