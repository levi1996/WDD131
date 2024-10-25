// Function to get grades input from the user
function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value; // get grades from input box
    const gradesArray = grades.split(","); // split into an array
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase()); // clean up spaces and make uppercase
    return cleanGrades; // return the cleaned array
  }
  
  // Function to convert letter grades to GPA points
  function lookupGrade(grade) {
    let points = 0;
    if (grade === "A") points = 4;
    else if (grade === "B") points = 3;
    else if (grade === "C") points = 2;
    else if (grade === "D") points = 1;
    return points;
  }
  
  // Function to calculate the GPA from the list of grades
  function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade)); // convert letter grades to points
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length; // calculate the GPA
    return gpa.toFixed(2); // round to 2 decimal places
  }
  
  // Function to display the GPA in the HTML
  function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = `Your GPA is: ${gpa}`; // display GPA in the output
  }
  
  // Function that handles the button click event
  function clickHandler() {
    const grades = getGrades("#grades"); // get grades from the input
    const gpa = calculateGpa(grades); // calculate the GPA
    outputGpa(gpa, "#output"); // output the GPA
  }
  
  // Add event listener to the button
  document.querySelector("#submitButton").addEventListener("click", clickHandler);
  