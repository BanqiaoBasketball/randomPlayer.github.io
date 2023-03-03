let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwT-Yt7LeTUXPPACOBJv6EXgCZRVMf-ft-Od4xpQK0fi7tPjFFtmY7ZYNfQTetQRR_KnQ/exec",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};

function resetAll() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwT-Yt7LeTUXPPACOBJv6EXgCZRVMf-ft-Od4xpQK0fi7tPjFFtmY7ZYNfQTetQRR_KnQ/exec?func=reset",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};
