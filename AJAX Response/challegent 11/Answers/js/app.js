var STORAGE_KEY = "storage_image";

// Tải ảnh tử local storage nếu có.
start();


// Bắt sự kiện click lên nút lưu
var btnSave = document.querySelector('#btnSave');
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
        setDataUrlToLocalStorage(dataUrl);
        displayImage(dataUrl);
    });
  });

});

// Chuyển từ Blob sang Data URL để hiển thị lên các DOM Element. Ở đây là thẻ img.
function convertBlobToDataUrl(blob,onSuccess){
  var fileReader = new FileReader();
  fileReader.onload=function(evt){
      onSuccess(evt.target.result);
  }
  fileReader.readAsDataURL(blob);
}

// Lưu Data Url vào local storage
function setDataUrlToLocalStorage(dataUrl){
      localStorage.setItem(STORAGE_KEY,dataUrl);
}

// Lấy Data Url từ local storage
function getDataUrlFromStorage(){
  return localStorage.getItem(STORAGE_KEY);
}

// Hiển thị ảnh từ Data Url
function displayImage(dataUrl){
  var img = document.querySelector('#outputImg');
  img.src=dataUrl;
}

function start(){
  var dataUrl = getDataUrlFromStorage();
  if(dataUrl){
    displayImage(dataUrl);
  }
}

function sendRequest(url,handler){
  var xhr = new XMLHttpRequest();
  var output = document.getElementById('output');
  xhr.onreadystatechange = handleResult;
  xhr.responseType = 'blob';
  xhr.open('GET', url);
  xhr.send();

  function handleResult() {
    if (xhr.readyState === this.DONE) {
      if (xhr.response)
        handler(xhr.response);
      else
        handler(null);
    }
  }

}
