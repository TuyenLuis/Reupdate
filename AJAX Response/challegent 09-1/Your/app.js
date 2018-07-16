function updateServerURL(){
    var url = 'http://ajax-json.cione.vn/api/v1/responses/url';
    var xhr = new XMLHttpRequest();
    var output = document.getElementById('output');
    
    xhr.onreadystatechange = handleResult;
    
    xhr.open('POST', url);
    xhr.send();
    
    function handleResult(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            output.innerHTML= xhr.responseURL;
            
        }
    }
    var serverTag = document.getElementById('server');
    serverTag.innerText = url;
}

var button = document.querySelector('#submit');
button.addEventListener('click', updateServerURL);