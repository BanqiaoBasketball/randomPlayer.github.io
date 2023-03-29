let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwUPf4abNLkZtFtsOrvpJ6E6TwHBmquXKAslleCqA_2g2064yyLCiK7CUAbiOVjBjY_AQ/exec",
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
    url: "https://script.google.com/macros/s/AKfycbx0pXgCaffVfCoFoiNWlyqALZPW34hKkiNKduQ4r0BJ00HyGUlXDN8nhyc62O7GuDsd4w/exec?func=queryForHtml",
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




