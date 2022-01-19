function sortNumbers()
{
  let table1 = [];
  table1.push(document.getElementById("number1").value.toString());
  table1.push(document.getElementById("number2").value.toString());
  table1.push(document.getElementById("number3").value.toString());
  table1 = table1.sort(function(a,b){return a-b});
  return document.getElementById("a1").innerHTML = table1;
}
