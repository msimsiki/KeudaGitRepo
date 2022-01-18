var tablecommands = [34, 566,71, 89];

function first(a, b) {
  console.log(a + b);
}

function second() {
  console.log(tablecommands[0]);
}

function third(a, b) {
  if (a + b < 100) {
    console.log("The number is less than 100!");
  }
  else {
    console.log("The numbers are too big!");
  }
}

function fourth(a, b) {
  if (a == b) {
    console.log("Same!");
  }
  else {
    console.log("Different!");
  }
}

function fifth(a, b, c) {
  console.log(a * 3600 + b * 60 + c);
}

function sixth(a, b, c) {
  function changeYears(c) {
    return c * 365.25;
  }
  function changeMonths(b) {
    switch (b - 1) {
      case 0:
        return 0;
        break;
      case 1:
        return 31;
        break;
      case 2:
        return 59;
        break;
      case 3:
        return 90;
        break;
      case 4:
        return 120;
        break;
      case 5:
        return 151;
        break;
      case 6:
        return 181;
        break;
      case 7:
        return 212;
        break;
      case 8:
        return 243;
        break;
      case 9:
        return 273;
        break;
      case 10:
        return 304;
        break;
      case 11:
        return 334;
        break;
      default:
        return 0;
    }
  }
  Date = changeYears(c) + changeMonths(b) + a;
  Now = changeYears(2021) + changeMonths(9) + 5;
  console.log(Now-Date);
}
