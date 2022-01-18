function sortNumbers()
{
  var n1 = document.getElementById('number1').value;
  var n2 = document.getElementById('number2').value;
  var n3 = document.getElementById('number3').value;
  var table = [n1, n2, n3];
  var newTable = table.sort();
  document.getElementById('a1').innerHTML = newTable;
}
