function checkAge()
{
  var age = parseInt(document.getElementById('age').value);
  if(age < 16)
  {
    document.getElementById('a4').innerHTML = "Can ride bicycle";
  }
  else if (age < 18)
  {
    document.getElementById('a4').innerHTML = "Can ride moped";
  }
  else
  {
    document.getElementById('a4').innerHTML = "Can drive car";
  }
}
