let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "http://script.google.com/macros/s/AKfycbwzBz4zcon-AttrKwjEnJ_JzRm9CatX-6XcaoWRjspJdhSL0s9nqNZ9FlUnWFfir7tkJA/exec",
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
    url: "http://script.google.com/macros/s/AKfycbwzBz4zcon-AttrKwjEnJ_JzRm9CatX-6XcaoWRjspJdhSL0s9nqNZ9FlUnWFfir7tkJA/exec?func=queryForHtml",
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




