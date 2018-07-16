//Todo
var url = 'http://ajax-json.cione.vn/api/v1/headers';
var xhr = new XMLHttpRequest();
var output = document.querySelector("#output");

xhr.onreadystatechange = handleResult;
xhr.open('GET', url);
xhr.send();


function handleResult() {
  if(xhr.readyState === XMLHttpRequest.DONE){
    var headers = xhr.getAllResponseHeaders();
    var result = getHeaders(headers);
    output.innerText = result;
  }
}


function getHeaders(allHeaders){
    var newLine = String.fromCharCode(0x0D) + String.fromCharCode(0x0A);
    var twoDotSpace = String.fromCharCode(0x3A) + String.fromCharCode(0x20);
    var header = allHeaders.split(newLine);
    var headerName, headerValue, arrHeader = [];
    var objHeader = {headerName, headerValue};
    
    for(let i = 0; i < header.length; i++){
        objHeader.headerName = header[i].split(twoDotSpace)[0];
        objHeader.headerValue = header[i].split(twoDotSpace)[1];
        
        arrHeader.push(objHeader);
    }
    return arrHeader;
}