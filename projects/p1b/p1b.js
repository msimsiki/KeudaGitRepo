function name()
{
  let name = document.getElementById("username").value;
  if (name.length<2)
  {
    alert("Enter a valid name!");
    return false;
  }
  else
  {
    return true;
  }
}

function email()
{
  let email = document.getElementById("email").value;
  function emailIsValid(email)
  {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (emailIsValid(email))
  {
    return true;
  }
  else
  {
    alert("Enter a valid email!");
    myForm.email.focus();
    return (false);
  }
}

function age()
{
  let age = document.getElementById("age").value;
  if (isNaN(age) || age=="")
  {
    alert("Enter a valid age!");
    return false;
  }
  else if (age < 0 || age > 130)
  {
    alert("Enter an age between 1-130")
    return false;
  }
  else
  {
    return true;
  }
}

function emailIsValid(email)
{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function dropbox()
{
  let choice = document.getElementById("dropbox").value;
  if (choice == "")
  {
    alert("Choose one of the options from dropbox!");
    return false;
  }
  else
  {
    return true;
  }
}

function radio()
{
  let option = document.getElementsByClassName("radios");
  for (let i = 0; i < option.length; i ++)
  {
    if (option[i].checked)
    {
      return true;
    }
  }
}

function main()
{
    let name = name()
    let email = email()
    let age = age()
    let dropbox = dropbox()
    let radio = radio()
    if (dropbox === true && radio === true && name === true && email === true && age === true)
    {
      alert("All fields are correct!");
      return true;
    }
    else
    {
      alert("Something went wrong!");
      return false;
    }
}
