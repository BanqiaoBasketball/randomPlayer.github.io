let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxq7M63wb-Bi4p0NBWEwqyyxisIOpQB4tuZIsX4nQSLjxQlIwzRNgMrMXbAzQaReQEI/exec",
   data: {
        "name": name
    },
	     crossDomain: true,
    success: function(response) {
        alert(response);
      
    },
  });
};

function queryForHtml() {
	document.getElementById("queryId").innerText = "查詢中..";
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxq7M63wb-Bi4p0NBWEwqyyxisIOpQB4tuZIsX4nQSLjxQlIwzRNgMrMXbAzQaReQEI/exec?func=queryForHtml",
   data: {
        "name": name,
		"func":"queryForHtml"
    },
	     crossDomain: true,
    success: function(response) {
			document.getElementById("queryId").innerText =response

        //alert(response);
      
    },
  });
};




