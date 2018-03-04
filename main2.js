var count = 0;
var table = document.getElementById("table1");
var btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'info.json');
    ourRequest.onload = function () {
        var ourdata = JSON.parse(ourRequest.responseText);
        console.log(ourdata);
        renderHTML(ourdata);
    };
    ourRequest.send();
});


var i = 0;
function renderHTML(data) {
    
    var htmlstring = "";
     
    for (i = 0 ; i < data.length; i++)
        {
            htmlstring = htmlstring + "<tr><td>" + data[i].Book + "</td><td>" + data[i].Author + "</td></tr>";
        }
    if ( i == data.length ) {
        count.innerHTML= i;  
        btn.style.display = "none";
        document.getElementById("input").style.display= 'block';
        
    }
    table.insertAdjacentHTML("beforeend",htmlstring);
}


function function2() {
    
    var input, filter, table, tr, i, count=0;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    tr = table.getElementsByTagName("tr");
    
    for(i = 0; i<tr.length ; i++) {
        
        var td1 = tr[i].getElementsByTagName("td")[0];
        var td2 = tr[i].getElementsByTagName("td")[1];
        if(td1+td2) {
            
            if((td1.innerHTML.toUpperCase().indexOf(filter)+td2.innerHTML.toUpperCase().indexOf(filter))>-2){
                tr[i].style.display = "";
                count++;
                document.getElementById("count").innerHTML=count;
                }
            else{
                tr[i].style.display = 'none';
                document.getElementById("count").innerHTML=count;
            }
        }

    }
    
    
}