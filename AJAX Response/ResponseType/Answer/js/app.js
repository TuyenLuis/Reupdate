var url = 'http://ajax-json.cione.vn/api/v1/responses/type';
var xhr = new XMLHttpRequest();
var output = document.getElementById('output');
xhr.onreadystatechange = handleResult;
xhr.responseType = 'blob';
xhr.open('GET', url);
xhr.send();

function handleResult() {
  if (xhr.readyState === this.DONE) {
    if (xhr.response)
      output.innerText = xhr.response;
    else
      output.innerText = null;
  }
}
