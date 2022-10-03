const socket = io();
const addMsgBtn = document.getElementById('msgSender');
const msgIssue = document.getElementById('msgIssue');
const msgInput = document.getElementById('msgInput');

const evalText = (text) => {
  return text.match(/<[^>]*>/g);
};

addMsgBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');

  const msgToSend = {
    userId: msgIssue.dataset.userid,
    issue: msgIssue.value,
    msg: msgInput.value,
  };

  if (evalText(msgToSend.msg) && evalText(msgToSend.issue)) {
    return Swal.fire('No HTML allowed');
  }

  if (!msgIssue.value || !msgInput.value) {
    return Swal.fire('Todos los campos son obligatorios');
  }
  console.log(msgToSend);
  //TODO send msg to server
  msgIssue.value = '';
  msgInput.value = '';
});

//SOCKET EVENTS

//socket.on('logMsg', (data) => {
//let d = new Date(data.date);
//let dformat =
//[d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/') +
//' ' +
//[d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
//msgToAdd.insertAdjacentHTML(
//'beforeend',
//`<li><span style="color: blue;">${data.mail}</span> , <span style="color:red"/>${dformat}</span>,<span style="color:green"/> ${data.msg}</span></li>`,
//);
//});

//socket.on('notification', (data) => {
//console.log('Alguien se conecto');
//});
