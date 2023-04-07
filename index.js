let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyJjvyplbztmzMFS33ih7HsQdX-mf7i6n6Dql5JCE5f7UL4yRf4x61F0htgu7IgQPoCbg/exec",
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
    url: "https://script.google.com/macros/s/AKfycbwsbHkChWvgcfS3VKEDYmjFdcefvWFrDuIRMV1BarZJ1uvNiANK0ywxlGQp0p4grdtuow/exec?func=queryForHtml",
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




