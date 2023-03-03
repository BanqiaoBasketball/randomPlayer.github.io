let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwYTpQgLzMJbyhcbru2QHhT2agE9KYgEwuNh-b5E-lrAWyRdfw54HzbqXcgQSLQvpqq1g/exec",
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
    url: "https://script.google.com/macros/s/AKfycbwYTpQgLzMJbyhcbru2QHhT2agE9KYgEwuNh-b5E-lrAWyRdfw54HzbqXcgQSLQvpqq1g/exec?func=reset",
   data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};
