let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyk9_lp8o8YkCh6U2HAb1ZzzM7fDnsl2DAahLTMu1-P9GpY_kUMpkaAhLFwVn8EcpIC3g/exec",
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
    url: "https://script.google.com/macros/s/AKfycbyk9_lp8o8YkCh6U2HAb1ZzzM7fDnsl2DAahLTMu1-P9GpY_kUMpkaAhLFwVn8EcpIC3g/exec?func=queryForHtml",
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




