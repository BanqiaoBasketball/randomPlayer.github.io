let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyf4eJ4WSjDL4TgvDv1LGT_k4Q5xJAzCn_3s7Ca-GnSaOj5_86RIOFQTy05RPzBdxresg/exec",
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
    url: "https://script.google.com/macros/s/AKfycbyf4eJ4WSjDL4TgvDv1LGT_k4Q5xJAzCn_3s7Ca-GnSaOj5_86RIOFQTy05RPzBdxresg/exec?func=queryForHtml",
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




