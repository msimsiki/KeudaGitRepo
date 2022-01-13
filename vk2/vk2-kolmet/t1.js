function armstrong() {
  num = document.getElementById("number").value;
  var Number = num;
  var digits = 0;
  while(num > 0) {
    digits = digits + 1;
    num = parseInt(num / 10);
  }
  num = Number;
  var sum = 0;
  var i;
  for (i = 0; i < digits; i++ ) {
    var digit = num % 10;
    sum = sum + Math.pow(digit, digits);
    num = parseInt(num / 10);
  }
  if(sum == Number) {
    document.getElementById("result").innerHTML = "The number: " + Number + " is Armstrong Number";
  }
  else {
    document.getElementById("result").innerHTML = "The number: " + Number + " is NOT Armstrong Number";
  }
}

function starPattern() {
  let n = 5;
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  for (let i = 2; i <= n; i++) {
    for (let j = n; j > i; j--) {
      string += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function hikUp() {
  for (var i = 1; i <= 100; i++) {
    var message = "";
    if (i % 3 === 0) {
        message = "Hik"
    }
    if (i % 5 === 0) {
        message += "Up";
    }
    console.log(message || i);
  }
}

function transformVowels() {
      var word = "mustafa";
      var s = word.split("");
      for (var i = 0; i < s.length; i++) {
          switch(s[i]) {
            case "a":
              s[i] = "4";
              break;
            case "e":
              s[i] = "3";
              break;
            case "i":
              s[i] = "1";
              break;
            case "o":
              s[i] = "0";
              break;
            case "s":
              s[i] = "5";
              break;
            default:
              word = s.toString().replace(/,/g,'');
          }
      }
      console.log(word);
}
