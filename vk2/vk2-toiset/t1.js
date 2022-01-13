function posneg()
{
  var number = parseInt(document.getElementById('number').value);
  if(number >= 0)
  {
    document.getElementById('a1').innerHTML = "number is positive";
  }
  else
  {
    document.getElementById('a1').innerHTML = "number is negative";
  }
}
