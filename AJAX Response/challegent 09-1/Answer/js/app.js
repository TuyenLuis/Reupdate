
  
//ham send file
 function sendFile(){
     var xhr = new XMLHttpRequest();
    var url = 'http://ajax-json.cione.vn/api/v1/responses/url';
    //khoi tao xml request
    
    xhr.onreadystatechange = handleResult;
    xhr.open("POST", url);
    xhr.send();
    
    function handleResult(){
        if(xhr.readyState === this.DONE){
            document.querySelector("#output").innerHTML = xhr.responseText;
        }
    }

}

var submit = document.querySelector("#submit");
submit.addEventListener("click", function(){
    sendFile();
});