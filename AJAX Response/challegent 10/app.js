var http = new XMLHttpRequest();
var url = 'http://ajax-json.cione.vn/api/v1/justforfun';
var output = document.getElementById('output');

http.onreadystatechange = handleResult;

http.open('GET', url);
http.send();

function handleResult(){
    if(http.readyState === XMLHttpRequest.DONE){
        output.innerHTML = http.response;
    }
}