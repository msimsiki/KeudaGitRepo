function evenNums()
{
  let nu = document.getElementById("input1").value;
  let nums = [];
  if (nu % 2 == 0 && nu !== "")
  {
     for (let i = 0; i <= nu; i = i + 2)
     {
       nums.push(i);
     }
     return document.getElementById("answer1").innerHTML = nums;
  }
  return document.getElementById("answer1").innerHTML = "Enter an even number!";
}

function makePW()
{
  let word = document.getElementById("input2").value.toString();
  let word1 = [];
  if (word.length > 0)
  {
    for (let i = 0; i < word.length; i ++)
    {
      word1.push(word[i]);
      word1.push('Ö');
    }
    let word2 = word1.toString();
    word2 = word2.replace(/,/g, "");
    return document.getElementById("answer2").innerHTML = word2;
  }
  return document.getElementById("answer2").innerHTML = "Enter a word!";
}

function isThere()
{
  let word = document.getElementById("input3").value.toString();
  let myrege = /ö/gi;
  if (word !== "" && myrege.test(word))
  {
    return document.getElementById("answer3").innerHTML = "There is!";
  }
  return document.getElementById("answer3").innerHTML = "There is no!";
}

function multiplyNumber()
{
  let num = document.getElementById("input4").value.toString();
  if (num !== "")
  {
    var a = 1;
    function factorial(n)
    {
      if (n == 0)
      {
        return a;
      }
      a = a * n;
      return factorial(n-1)
    }
    return document.getElementById("answer4").innerHTML = factorial(num);
  }
  return document.getElementById("answer4").innerHTML = "Enter a number!";
}

function divisible()
{
  var dvsbl = "";
  var i = 1;
  do
  {
    if (i % 3 == 0 && i % 5 == 0)
    {
      dvsbl = dvsbl + "Best, ";
    }
    else if (i % 5 == 0)
    {
      dvsbl = dvsbl +"Better, ";
    }
    else if (i % 3 == 0)
    {
      dvsbl = dvsbl +"Good, ";
    }
    else
    {
    dvsbl  = dvsbl + i +", ";
    }
    i ++;
  }
  while (i < 101);
  return document.getElementById("answer5").innerHTML= dvsbl;
}

function firstTen()
{
  let ten = "";
  for (i = 0 ; i< 11; i ++)
  {
    ten = ten +i +", ";
  }
  return document.getElementById("answer6").innerHTML = ten;
}

function calcFirstTen()
{
  let calcTen = 0;
  for (i = 0 ; i < 11; i ++)
  {
    calcTen = calcTen + i;
  }
  return document.getElementById("answer7").innerHTML = calcTen;
}

function powerOf()
{
  let x = document.getElementById("input5").value;
  let y = document.getElementById("input6").value;
  return document.getElementById("answer8").innerHTML = Math.pow(x,y);
}

function bigAndSmall()
{
  let x = [];
   x.push(document.getElementById("input7").value);
   x.push(document.getElementById("input8").value);
   x.push(document.getElementById("input9").value);
   x.push(document.getElementById("input10").value);
   x.push(document.getElementById("input11").value);
   let big = parseInt(x[0]);
   let small = parseInt(x[0]);
   for (let i = 0; i < x.length ; i ++)
   {
        if (big < parseInt(x[i]))
        {
          big = x[i];
        }

     if (small > parseInt(x[i]))
     {
       small = x[i] ;
     }
   }
  return document.getElementById("answer9").innerHTML = "Big: " + big + " Small: " + small;
}

function changePW()
{
  let word = [];
  let letter = ["a", "ä", "b", "c", "d", "e", "f", "g", "h", "l", "k", "y", "ö", "u", "r", "t", "c", "s", "z", "v"];
  word = document.getElementById("input12").value;
  let newWord ="";
  for (let i = 0; i < (word.length); i ++)
  {
    newWord = newWord + word[i] + letter[Math.floor(Math.random() * 20)];
  }
  return document.getElementById("answer10").innerHTML = newWord;
}

function evenOddSum()
{
  let x = parseInt(document.getElementById("input14").value);
  let y = parseInt(document.getElementById("input13").value);
  let evenNums = [];
  let oddNums = [];
  let evenNumsSums = 0;
  let oddNumsSums = 0;
  for (let i = y; i < x + 1; i ++)
  {
    if (i % 2 == 0)
    {
      evenNums.push(i);
      evenNumsSums = evenNumsSums +i;
    }
    else
    {
      oddNums.push(i);
      oddNumsSums = oddNumsSums +i;
    }
  }
  return document.getElementById("answer11").innerHTML = "Even Numbers: " + evenNums + "<br>" + "Even Sums: " + evenNumsSums + "<br>" + "Odd Numbers: " + oddNums + "<br>" + " Odd Sums: " + oddNumsSums;
}
