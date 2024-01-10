// 1st
function changeColor() {
    var button = document.getElementById("colorButton");
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generates a random hex color
    button.style.backgroundColor = randomColor;
  }

  //2nd ques
  var currentTime = new Date();
  var hours = currentTime.getHours();

  if (hours < 12) {
    alert("Good morning! 🌄");
  } else if (hours < 18) {
    alert("Good afternoon! 🕑");
  } else {
    alert("Good evening! 🌃");
  }

  //3rd ques
  function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
      var result = num1 + num2;
      document.getElementById("result").innerHTML = "Result: " + result;
    } else {
      alert("Please enter valid numbers.");
    }
  }
