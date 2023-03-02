let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxYENEi4aSz-jeQtjCX2DoLd_iungMreo0JSB5R2d4O1-redl2i9jiwQZLHoMZSVySDsQ/exec",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};

function resetAll() {
	alert("ttt");
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxp14AIG00wiwNl-TuDYGKBw6_hRhkNCCePN1jFqggUgy2bBdr_LO62Ycm-eBCLSdMGFw/exec?func=reset",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};

function closeSystem() {
 alert('系統維護中'); 
}
sendButton.addEventListener('click', closeSystem);

