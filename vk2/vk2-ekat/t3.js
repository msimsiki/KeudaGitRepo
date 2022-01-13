function EvenOrOdd()
{
  number = document.getElementById('number').value;
  if(number %2 == 0)
  {
    document.getElementById('a3').innerHTML = "Number is even";
  }
  else
  {
      document.getElementById('a3').innerHTML = "Number is odd";
  }
}
