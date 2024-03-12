var n1;
var ans;
function Guess()
{
    var random=Math.ceil(Math.random()*10)
    while(true)
    {
        n1=parseInt(document.getElementById("input-box").value)
        if(n1==random)
        {
            ans="Congrats You won!"
            break;
        }
        else if(n1>random)
        {
            ans="Plz guess lesser!"
            break;
        }
        else
        {
            ans="Plz guess greater!"
            break;
        }
    }
    document.getElementById("result").innerHTML=ans;
}
function again()
{
    document.getElementById("input-box").value="";
    document.getElementById("result").innerHTML="Enter a number";
}
