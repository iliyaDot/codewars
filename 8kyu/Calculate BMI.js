
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    let calc = weight / (height * height);

    if (calc <= 18.5) {
        return "Underweight";
    } else if (calc <= 25.0) {
        return "Normal";
    } else if (calc <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}