window.onload = function() {
  document.getElementById("send").onclick = check;
  document.getElementById("save").onsubmit = save;
  document.getElementById("search").onclick = search;
  document.getElementById("erase").onclick = erase;
}

function createID(eml, phn, fna, lna, adr, cod, cit) {
  this.email = eml;
  this.phone = phn;
  this.firstname = fna;
  this.lastname = lna;
  this.address = adr;
  this.postcode = cod;
  this.postcity = cit;
}

//Function to save entered infos
function save() {
  let eml = document.getElementById("email").value;
  let phn = document.getElementById("phone").value;
  let fna = document.getElementById("firstname").value;
  let lna = document.getElementById("lastname").value;
  let adr = document.getElementById("address").value;
  let cod = document.getElementById("postcode").value;
  let cit = document.getElementById("postcity").value;
  const person = new createID(eml, phn, fna, lna, adr, cod, cit);
  window.localStorage.setItem(eml,JSON.stringify(person));
}

//Function to search saved infos
function search() {
  let xA = document.getElementById("bringIt");
  let key = document.getElementById("bringInfo").value;
  if (localStorage.getItem(key) === null) {
    alert("You haven't entered an email address or entered it wrong!");
    document.getElementById("bringInfo").value = "";
  }
  else {
    let xB = window.localStorage.getItem(key);
    const xF = JSON.parse(xB);
    const {firstname, lastname, address, postcode, postcity, phone, email} = xF;
    let xC = `Info: ${firstname} ${lastname} ${address} ${postcode} ${postcity} ${phone} ${email}.`;
    let xD = document.createElement("p");
    xD.setAttribute("id", "saveInfo");
    let xE = document.createTextNode(xC);
    xD.appendChild(xE);
    xA.appendChild(xD);
    document.getElementById("bringInfo").value = "";
  }
}

//Function to erase saved infos
function erase() {
  let key = document.getElementById("eraseInfo").value;
  let xG = document.getElementById("saveInfo");
  if (localStorage.getItem(key) === null) {
    alert("You haven't entered an email address or entered it wrong!")
    document.getElementById("eraseInfo").value = "";
  }
  else {
    if (window.confirm("Do you really want to erase the registered info?")) {
    localStorage.removeItem(key);
    alert("Registered info has been erased!");
    xG.remove();
    document.getElementById("eraseInfo").value = "";
    }
  }
}

//Check, is required areas filled
function check() {
  let a = document.getElementById("email").value;
  let e = document.getElementById("address").value;
  let b = document.getElementById("firstname").value;
  let d = document.getElementById("lastname").value;
  let p = document.getElementById("postcode").value;
  let q = document.getElementById("postcity").value;
  //Post code validation
  const conf = (xH) => (xH.length == 5) ? true : false;
  //Check email
  if (a == "" || emailIsValid(a) == false) {
    alert("You have entered an invalid email address!");
    myForm.email.focus();
    return (false);
  }
  //Check address
  else if (e == "") {
    alert("Enter an address!");
    myForm.adr.focus();
    return (false);
  }
  //Check firstname
  else if (b == "" || NonNu(b) == true) {
    alert("Enter a firstname!");
    myForm.fna.focus();
    return (false);
  }
  //Check lastname
  else if (d == "" || NonNu(d) == true) {
    alert("Enter a lastname!");
    myForm.lna.focus();
    return (false);
  }
  //Check post-code
  else if (isNaN(p) || conf(p) == false) {
    alert("Enter a post-code!");
    myForm.cod.focus();
    return (false);
  }
  //Check post-city
  else if (q == "" || NonNu(q) == true) {
    alert("Enter a post-city!");
    myForm.cit.focus();
    return (false);
  }
}

//Email validation
function emailIsValid(email) {
  console.log(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//Checks, is entry number
function NonNu(xD) {
  console.log(xD);
  return /\d/.test(xD);
}
