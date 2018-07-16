var img = document.querySelector('#outputImg');

start();

var buttonSave = document.querySelector("#btnSave");
buttonSave.addEventListener('click', function(evt){
    
})

btnSave.addEventListener('click',function(){
  var url = document.querySelector('input#imgSrc').value;
  if(!url){
    alert("Vui lòng nhập đường dẫn");
    return;
  }
  // Gửi Ajax request để lấy hình về.
  sendRequest(url,function(blob){

    if(!blob){
      return;
    }

    convertBlobToDataUrl(blob,function(dataUrl){
        window.localStorage.setItem('src', dataUrl);
        displayImage(dataUrl);
    });
  });

});

// Chuyển từ Blob sang Data URL để các vào thuộc tính src trên các DOM Element. Ví dụ, thẻ img.
function convertBlobToDataUrl(blob,onSuccess){
    var fileReader = new FileReader();
    fileReader.onload=function(evt){
        onSuccess(evt.target.result);
    }
    fileReader.readAsDataURL(blob);
}

// Hiển thị ảnh từ Data Url
function displayImage(dataUrl){
    img.src=dataUrl;
    window.localStorage.setItem('src' , dataUrl);
}


function start(){
    var dataUrl = window.localStorage.getItem('src');
    if(dataUrl){
        img.src = dataUrl;
    }
}

function sendRequest(url, handler){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    
    xhr.onreadystatechange = handleResult;
    
    xhr.open('GET', url);
    xhr.send();
    
    function handleResult(){
        if(xhr.readyState === this.DONE){
            if(xhr.response){
                handler(xhr.response);
            }
            else{
                handler(null);
            }
        }
    }
}