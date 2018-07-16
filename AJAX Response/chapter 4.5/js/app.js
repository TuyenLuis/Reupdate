var url = 'http://ajax-json.cione.vn/api/v1/headers';
var xhr = new XMLHttpRequest();
var output = document.getElementById('output');
xhr.onreadystatechange = handleResult;
xhr.open('GET', url);
xhr.send();

function handleResult() {
  if (xhr.readyState === this.HEADERS_RECEIVED) {
    output.innerText = this.getResponseHeader("content-type");
  }
}
