let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwmBhDMcWaaHx3l8EmbhFnNZER23SDzx8tj4u5DzA1JjxnentdtVj0lME6USWE1vCZynQ/exec",
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
    url: "https://script.google.com/macros/s/AKfycbwmBhDMcWaaHx3l8EmbhFnNZER23SDzx8tj4u5DzA1JjxnentdtVj0lME6USWE1vCZynQ/exec?func=queryForHtml",
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




