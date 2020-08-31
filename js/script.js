const calcy = () => {
  let math = document.getElementById("math").value;
  let physics = document.getElementById("physics").value;
  let english = document.getElementById("english").value;
  let computer = document.getElementById("computer").value;
  let grades = "";
 
  let totalGrades = parseFloat(math) + parseFloat(physics) + parseFloat(english) + parseFloat(computer)


  let perc = (totalGrades /400) * 100
  
  if(perc <= 100 && perc >= 80) {
    grades = "A"
  } else if(perc <= 79 && perc >= 60) {
    grades = "B"
  } else if(perc <= 59 && perc >= 40) {
    grades = "C"
  } else {
    grades = "F"
  }

  if(perc >= 39.5) {
    document.getElementById("showData").innerHTML = `Total Mark: ${totalGrades} and Percentage is ${perc}% and your grade is ${grades} and your are Passed`
  } else {
    document.getElementById("showData").innerHTML = `Total Mark: ${totalGrades} and Percentage is ${perc}% and your grade is ${grades}  and you are failed`
  }
  
}