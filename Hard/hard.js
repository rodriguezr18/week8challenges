const massTom = 12;
const heightTom = 16;
const massJerry = 50;
const heightJerry = 7;
const BMITom = massTom / heightTom ** 2;
const BMIJerry = massJerry / (heightJerry * heightJerry);
const higherBMI = BMITom > BMIJerry;
if (BMIJerry < BMITom) {
    console.log(`Tom's BMI ${BMITom} is higher than Jerry's ${BMIJerry}`)
} else {
    console.log(`Jerry's BMI (${BMIJerry}) is higher than Tom's ${BMITom}`)
}
console.log(BMITom, BMIJerry, higherBMI);