function findBigNumber()
{
  var n1 = document.getElementById('number1').value;
  var n2 = document.getElementById('number2').value;
  var n3 = document.getElementById('number3').value;
  var n4 = document.getElementById('number4').value;
  var n5 = document.getElementById('number5').value;
  var table = [n1, n2, n3, n4, n5];
  table = table.sort();
  document.getElementById('a2').innerHTML = table[4];
}
