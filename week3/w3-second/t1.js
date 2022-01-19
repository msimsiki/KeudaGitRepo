function wordValues()
{
 let table = ["AEINST", 1, "OÄKL", 2, "UM", 3, "YHJPRV", 4, "ÖD", 7, "BFG", 8, "C", 10];
 let word = document.getElementById("input1").value.toString();
 if (word == "")
 {
   return document.getElementById("answer1").innerHTML = "Enter a word!";
 }
 word = word.toUpperCase();
 let value = 0;
     for (let j = 0; j < word.length; j ++)
     {
       let x = 0;
     for (let i = 0;  i < table.length; i ++)
     {
       if (table[i].toString().indexOf(word[j]) > -1)
       {
         value = value + table[i +1]
         x ++;
       }
     }
     if (x == 0)
     {
       value = value +12;
     }
   }
     return document.getElementById("answer1").innerHTML = value;
}

function randomNumbers()
{
  let nums = [];
    for (let i = 0; i < 7; i ++)
    {
      nums.push(Math.floor(Math.random() * 100));
    }
    return document.getElementById("answer2").innerHTML = nums;
}

function boardGame()
{
  let table =[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  let board = "";
  for (var w = 0; w < table.length; w ++)
  {
    board += "<tr>";
    for (var z = 0 ; z < table[w].length; z ++)
    {
      board += "<td>" + table[w][z] + "</td>";
    }
    board += "</tr>";
  }
  return document.getElementById("answer3").innerHTML = board;
}

function randomCards()
{
  let guess = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'];
  let group =  ['&#9826;', '&#9825;', '&#9828;', '&#9827;'];
  let stack = [];
  let cards = [];
  for (let i = 0; i < group.length; i ++)
  {
    for (let z = 0; z < guess.length; z ++)
    {
      stack.push(group[i] + guess[z]);
    }
  }
  for (let c = 0; c < 5 ; c ++)
  {
    let num = Math.floor(Math.random() * 52);
    cards[c] = stack[num - c];
    stack = stack.slice(0, num - c).concat(stack.slice((num - c + 1)));
  }
  console.log(cards);
  return document.getElementById("answer4").innerHTML = cards;
}
