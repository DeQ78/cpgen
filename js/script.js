'use strict';
if ('IntersectionObserver' in window) {
    console.log("Your browser supports IntersectionObserver");
} else {
    console.log("Your browser does not support IntersectionObserver");
}






/*
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
<input type="file" id="file-input" />
<h3>Contents of the file:</h3>
<pre id="file-content"></pre>

*/

/*
var fileContent = "My epic novel that I don't want to lose.";
var bb = new Blob([fileContent ], { type: 'text/plain' });
var a = document.createElement('a');
a.download = 'download.txt';
a.href = window.URL.createObjectURL(bb);
a.click();
*/
