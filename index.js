let sendButton = document.querySelector('button');

function send() {
//  let name = document.querySelector('#nameValue').value;
//  $.ajax({
//    url: "https://script.google.com/macros/s/AKfycbwUPf4abNLkZtFtsOrvpJ6E6TwHBmquXKAslleCqA_2g2064yyLCiK7CUAbiOVjBjY_AQ/exec",
//   data: {
//        "name": name
//    },
//    success: function(response) {
//        alert(response);
     
//    },
//  });
  alert('系統維護中');
};

function resetAll() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwUPf4abNLkZtFtsOrvpJ6E6TwHBmquXKAslleCqA_2g2064yyLCiK7CUAbiOVjBjY_AQ/exec?func=reset",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};
