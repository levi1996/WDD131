// Activity 1: 
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2: 
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") points = 4;
  else if (grade === "B") points = 3;
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3: 
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4: 
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const longFruits = fruits.filter(fruit => fruit.length > 6);

// Activity 5: 
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber);
