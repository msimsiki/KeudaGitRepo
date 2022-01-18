function bigLetter()
{
  var text1 = document.getElementById("given1").value.toString();
  if (text1 == "")
  {
    return document.getElementById("answer1").innerHTML = "Write something";
  }
  return (text1[0] == text1[0].toUpperCase())?  document.getElementById("answer1").innerHTML = "First letter is big." :
  document.getElementById("answer1").innerHTML = "First letter is small.";
}

function removeSpace()
{
  var text = document.getElementById("clean1").value.toString();
  text = text.trim();
  return document.getElementById("clean1").value = text;
}

function countVocals()
{
  var text2 = document.getElementById("vocals1").value.toString();
  if (text2 == "")
  {
    return document.getElementById("answer3").innerHTML = "Write something";
  }
  var count = 0;
  var vocals = ['a', 'A', 'ä', 'Ä', 'ı', 'I', 'i', 'İ', 'e', 'E', 'o', 'O', 'ö', 'Ö', 'u', 'U', 'ü', 'Ü', 'y', 'Y'];
  for(var i = 0; i < text2.length ; i++)
  {
     if (vocals.indexOf(text2[i]) > -1)
     {
       count ++;
     }
  }
  return document.getElementById("answer3").innerHTML = "Here is an example text for the " + count + " vocals";
}

function alfaNumeric()
{
  var  text = document.getElementById("alfaNumeric1").value.toString();
  if (text.replace(/[A-z]/gi,"").length == 0)
  {
    return document.getElementById("answer4").innerHTML = "This text includes only letters!";
  }
  else if (text.replace(/[0-9]/g,"").length == 0)
  {
    return document.getElementById("answer4").innerHTML = "This text includes only numbers!";
  }
  else if (text.replace(/[0-9]/g,"").replace(/[A-z]/gi,"").length > 0)
  {
    return document.getElementById("answer4").innerHTML = "This text includes only special characters!";
  }
  return document.getElementById("answer4").innerHTML = "This text includes only letters and numbers!";
}

function postCode()
{
  var zipCode = document.getElementById("postCode1").value.toString();
  if (zipCode.length == 5 && zipCode.replace(/[0-9]/g, "").length == 0)
  {
    return document.getElementById("answer5").innerHTML = "Valid post-code!";
  }
  return document.getElementById("answer5").innerHTML = "Invalid post-code!";
}

function idNumber()
{
  var idno = document.getElementById("idNumber1").value.toString();
  if(idno.substring(0,6).replace(/[0-9]/g,"").length == 0  && /(A|-)/.test(idno[6]) && idno.substring(7,10).replace(/[0-9]/g,"").length == 0  && idno.length == 11)
  {
    if (/[0-9]/.test(idno[10]) || /[A-Z]/.test(idno[10]))
    {
      return document.getElementById("answer6").innerHTML = "Valid ID!";
    }
  }
  return document.getElementById("answer6").innerHTML = "Invalid ID!";
}

function checkHtmlTags()
{
  var text1 = document.getElementById("tag1").value.toString();
  var tags = ["<!--...-->", "<!doctype>", "<a>", "<abbr>", "<acronym>", "<address>", "<applet>", "<area>", "<article>", "<aside>", "<audio>", "<b>",
  "<base>", "<basefont>", "<bb>", "<bdo>", "<big>", "<blockquote>", "<body>", "<br />", "<button>", "<canvas>", "<caption>", "<center>", "<cite>",
  "<code>", "<col>", "<colgroup>", "<command>", "<datagrid>", "<datalist>", "<dd>", "<del>", "<details>", "<dfn>", "<dialog>", "<dir>", "<div>",
  "<dl>", "<dt>", "<em>", "<embed>", "<eventsource>", "<fieldset>", "<figcaption>", "<figure>", "<font>", "<footer>", "<form>", "<frame>",
  "<frameset>", "<h1> to <h6>", "<head>", "<header>", "<hgroup>", "<hr />", "<html>", "<i>", "<iframe>", "<img>", "<input>", "<ins>", "<isindex>",
  "<kbd>", "<keygen>", "<label>", "<legend>", "<li>", "<link>", "<map>", "<mark>", "<menu>", "<meta>", "<meter>", "<nav>", "<noframes>", "<noscript>",
  "<object>", "<ol>", "<optgroup>", "<option>", "<output>", "<p>", "<param>", "<pre>", "<progress>", "<q>", "<rp>", "<rt>", "<ruby>", "<s>", "<samp>",
  "<script>", "<section>", "<select>", "<small>", "<source>", "<span>", "<strike>", "<strong>", "<style>", "<sub>", "<sup>", "<table>", "<tbody>",
  "<td>", "<textarea>", "<tfoot>", "<th>", "<thead>", "<time>", "<title>", "<tr>", "<track>", "<tt>", "<u>", "<ul>", "<var>", "<video>", "<wbr>",];
  for(var i = 0 ;  i < tags.length ; i++)
  {
    if (text1.indexOf(tags[i]) > -1)
    {
      return document.getElementById("answer7").innerHTML = "There is HTML Tag in this text!";
    }
  }
  return document.getElementById("answer7").innerHTML = "There is no HTML Tag in this text!";
}
