/* Adds the calculator functionality to the program. */

let Total = 0;
// Adds or subtracts X calories from the total consumed depending on the type of food item
function addCalories(str) {
  var item = document.getElementById('calculator');
  // Displays the calculator div
  if (item.className =='hidden') {
    item.className = (item.className == 'hidden') ? 'unhidden' : 'hidden';
  }
  // Must include two if statements, otherwise the +/- signs will only work for the second call to this function
  if (str == 'Dplus') {
    Total += 200;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Dminus' && Total >= 200) {
    Total -= 200;
    document.getElementById('total').innerHTML = Total;
  }
  // Outputs error message if user subtracts an amount of calories greater than they've consumed
  else if (str == 'Dminus' && Total < 200) {
    window.alert("Error: subtracting more calories than consumed.")
  }
  else if (str == 'ICplus') {
    Total += 300;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'ICminus' && Total >= 300) {
    Total -= 300;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'ICminus' && Total < 300) {
    window.alert("Error: subtracting more calories than consumed.")
  }
  else if (str == 'Pplus') {
    Total += 200;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Pminus' && Total >= 200) {
    Total -= 200;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Pminus' && Total < 200) {
    window.alert("Error: subtracting more calories than consumed.")
  }
  else if (str == 'Tplus') {
    Total += 250;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Tminus' && Total >= 250) {
    Total -= 250;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Tminus' && Total < 250) {
    window.alert("Error: subtracting more calories than consumed.")
  }
  else if (str == 'Cplus') {
    Total += 150;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Cminus' && Total >= 150) {
    Total -= 150;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Cminus' && Total < 150) {
    window.alert("Error: subtracting more calories than consumed.")
  }
  else if(str == 'Splus') {
    Total += 50;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Sminus' && Total >=50) {
    Total -= 50;
    document.getElementById('total').innerHTML = Total;
  }
  else if (str == 'Sminus' && Total < 50) {
    window.alert("Error: subtracting more calories than consumed.")
  }
}