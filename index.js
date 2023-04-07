let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbziFcUDWao6ASdwnCY12JmTOcOoUnoOtkZc1GJSdQzx0biNQPsjUzbYAvbIM8ZJbtPXdw/exec",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};

function queryForHtml() {
	document.getElementById("queryId").innerText = "查詢中..";
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbziFcUDWao6ASdwnCY12JmTOcOoUnoOtkZc1GJSdQzx0biNQPsjUzbYAvbIM8ZJbtPXdw/exec?func=queryForHtml",
   data: {
        "name": name,
		"func":"queryForHtml"
    },
    success: function(response) {
			document.getElementById("queryId").innerText =response

        //alert(response);
      
    },
  });
};




