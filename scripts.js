console.log("Doc Height = " + document.body.offsetHeight);
console.log("win Height = " + document.documentElement.clientHeight);
window.onscroll = function(ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    var div = document.createElement("div");
    div.innerHTML =
      '<div class="row"><div class="column"><nav class="column"><a href="https://libraryofbabel.info/random.cgi" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Empalme_a_Obras_Sanitarias_1940.png" alt="image" style="width:100%"></a></nav></div><div class="column"><nav class="column"><a href="https://libraryofbabel.info/random.cgi" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Empalme_a_Obras_Sanitarias_1940.png" alt="image" style="width:100%"></a></nav></div><div class="column"><nav class="column"><a href="https://libraryofbabel.info/random.cgi" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Empalme_a_Obras_Sanitarias_1940.png" alt="image" style="width:100%"></a></nav></div><div class="column"><nav class="column"><a href="https://libraryofbabel.info/random.cgi" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Empalme_a_Obras_Sanitarias_1940.png" alt="image" style="width:100%"></a></nav></div><div class="column"><nav class="column"><a href="https://libraryofbabel.info/random.cgi" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Empalme_a_Obras_Sanitarias_1940.png" alt="image" style="width:100%"></a></nav></div></div>';
    document.body.appendChild(div);
  }
};

