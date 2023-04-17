let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxlxnG6G9jj4eeIalNMpChOsrvTS0Ol7l9P6iJeXVHaOfPazVTn_0ogW8m3FEH-S373lw/exec",
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
    url: "https://script.google.com/macros/s/AKfycbxlxnG6G9jj4eeIalNMpChOsrvTS0Ol7l9P6iJeXVHaOfPazVTn_0ogW8m3FEH-S373lw/exec?func=queryForHtml",
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




