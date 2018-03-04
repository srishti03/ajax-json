var count = document.getElementById("count").innerHTML = 0 ;
var table = document.getElementById("table");
var btn = document.getElementById("btn");


btn.addEventListener("click", function (){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',"https://srishti03.github.io/ajax-json/main.json");
    ourRequest.onload = function()
    {
        var data = JSON.parse(ourRequest.responseText);
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
            htmlstring  = htmlstring + "<tr><td>" + data[i].Book-name + "<tr><td>" + data[i].Author + "</td></tr>";

        }
    if ( i==data.length ){
        count.innerHTML = i ;  
        btn.style.disply="none";
        document.getElementById("input").style.display="block";
        
    }
    table.insertAdjacentHTML("beforeend",htmlstring);
}


