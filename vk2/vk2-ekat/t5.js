function translate()
{
  var choice = document.getElementById('language').value;
  if(choice == 'fi')
  {
    document.getElementById('a5').innerHTML = "Hei Maailma";
  }
  else if (choice = 'se')
  {
    document.getElementById('a5').innerHTML = "Hej Världen";
  }
  else if (choice = 'es')
  {
    document.getElementById('a5').innerHTML = "Hola Mundo";
  }
  else
  {
    document.getElementById('a5').innerHTML = "You did not make any choice";
  }
}
