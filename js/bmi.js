document.getElementById("calcBtn").addEventListener("click", function () {

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const resultDiv = document.getElementById("bmiResult");
  const recDiv = document.getElementById("bmiRecommendation");

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = '<p class="text-danger">Please enter valid weight and height.</p>';
    recDiv.classList.add("d-none");
    return;
  }

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  const categories = [
    { max: 18.5, label: "Underweight", cls: "underweight", bar: 15 },
    { max: 25,   label: "Normal Weight", cls: "normal",   bar: 40 },
    { max: 30,   label: "Overweight",  cls: "overweight", bar: 65 },
    { max: Infinity, label: "Obese",   cls: "obese",      bar: 90 }
  ];

  const cat = categories.find(c => bmi < c.max);

  resultDiv.innerHTML = `
    <div class="bmi-number ${cat.cls}">${bmi}</div>
    <div class="bmi-category">${cat.label}</div>
    <div class="bmi-bar-wrap">
      <div class="bmi-bar ${cat.cls}" id="bmiBar"></div>
    </div>
  `;

  setTimeout(() => document.getElementById("bmiBar").style.width = cat.bar + "%", 100);

  const tips = {
    underweight: { male: "You are underweight. Increase calorie intake with proteins like eggs and chicken.", female: "You are underweight. Add healthy fats like avocado and nuts to your diet." },
    normal:      { male: "Great! Stay active 150 min/week and eat a balanced diet.", female: "Great! Stay active 150 min/week and eat a balanced diet." },
    overweight:  { male: "Try to increase activity and reduce processed foods by 300–500 calories/day.", female: "Try to increase activity and reduce processed foods by 300–500 calories/day." },
    obese:       { male: "Consult a doctor. Focus on exercise and gradual calorie reduction.", female: "Consult a doctor. Focus on exercise and gradual calorie reduction." }
  };

  recDiv.classList.remove("d-none");
  recDiv.innerHTML = `<strong class="text-white">Health Tip:</strong> ${tips[cat.cls][gender]}`;
});