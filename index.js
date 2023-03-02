let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxR3xBWFtM8rV-BzNzeRG-lapGz7oAZZDtEW0j6lf72XAcpWJk6e0yjpStuiZtWcxaCGA/exec",
    data: {
        "name": name
    },
    success: function(response) {
        alert(response);
      
    },
  });
};
function close() {
 alert('系統維護中'); 
}
sendButton.addEventListener('click', close);
