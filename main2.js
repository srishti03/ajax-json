var count = document.getElementById("count").innerHTML = 0 ;
var table = document.getElementById("table");
var info = document.getElementById("books-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function (){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',"main.json");
    ourRequest.onload = function()
    {
        var data = JASON.parse(ourRequest.responseText);
        console.log(data);
        renderHTML(data);
        
    };
    ourRequest.send();
})


var i = 0 ;
function renderHTML(data)
{
    var htmlstring = " " ;
    for ( i=0 ; i<data.length ; i++)
        {
            htmlstring + = "<tr><td>" + data[i].Book-name + "<tr><td>" + data[i].Author + "</td></tr>";

        }
    if ( i==data.length ){
        count.innerHTML = i ;  
        btn.style.disply="none";
        document.getElementById("input").style.display="block";
        
    }
    table.insertAdjacentHTML("beforeend",htmlstring);
}


