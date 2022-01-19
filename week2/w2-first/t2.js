function findBigNumber()
{
  let table1 = [];
  table1.push(document.getElementById("number1").value);
  table1.push(document.getElementById("number2").value);
  table1.push(document.getElementById("number3").value);
  table1.push(document.getElementById("number4").value);
  table1.push(document.getElementById("number5").value);
  let bigNumber = Math.max(...table1);
  return document.getElementById("a2").innerHTML= bigNumber;
}
