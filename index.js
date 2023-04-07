let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwxpVqGy0sCqb3hC6aCYNpcpKqA2Xs6Fp94AFIADvlcQ89mY1XsAc9EnPdOztO-Ik2ukg/exec",
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




