var url = 'http://ajax-json.cione.vn/api/v1/mime/response';
var xhr = new XMLHttpRequest();
var output = document.getElementById('output');
xhr.onreadystatechange = handleResult;
xhr.open('GET', url);
xhr.overrideMimeType("text/xml");
xhr.send();

function handleResult() {
  if (xhr.readyState === this.DONE) {
    output.innerHTML = xhr.responseXML;
    console.log(xhr.responseXML);
  }
}
