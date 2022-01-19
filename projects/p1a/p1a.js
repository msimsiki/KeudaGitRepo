function send()
{
  var userid = document.getElementById('userid').value;
  var pw = document.getElementById('pw').value;
  var rd1 = document.getElementById('rd1').value;
  var rd2 = document.getElementById('rd2').value;
  var rd3 = document.getElementById('rd3').value;
  var cb1 = document.getElementById('cb1').value;
  var cb2 = document.getElementById('cb2').value;
  var cb3 = document.getElementById('cb3').value;
  var op1 = document.getElementById('op1').value;
  var op2 = document.getElementById('op2').value;
  var op3 = document.getElementById('op3').value;
  var op4 = document.getElementById('op4').value;
  var dev = document.getElementById('dev').value;
  if (userid == "" || pw == "" || rd1 == ""  || rd2 == ""  || rd3 == ""  || cb1 == ""  || cb2 == ""  || cb3 == ""  || op1 == ""  || op2 == ""  || op3 == "" || op4 == "" || dev == "")
  {
    alert("Fill empty places!");
    return;
  }
  document.getElementById("signup").submit();
  alert("The form has been sent!");
}
