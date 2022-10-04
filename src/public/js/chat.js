const socket = io('http://localhost:3000');
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
    uid: msgIssue.dataset.userid,
    issue: msgIssue.value,
    message: msgInput.value,
  };

  if (evalText(msgToSend.message) && evalText(msgToSend.issue)) {
    return Swal.fire('No HTML allowed');
  }

  if (!msgIssue.value || !msgInput.value) {
    return Swal.fire('Todos los campos son obligatorios');
  }
  socket.emit('addMsg', msgToSend);
  console.log(msgToSend);
  msgIssue.value = '';
  msgInput.value = '';
});

//SOCKET EVENTS

socket.on('logMsg', (data) => {
  console.log(data);
  let d = new Date();
  let dformat =
    [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/') +
    ' ' +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
  msgToAdd.insertAdjacentHTML(
    'beforeend',
    `<li><span style="color: blue;">${data.issue}</span> , <span style="color:red"/>${dformat}</span>,<span style="color:green"/> ${data.message}</span></li>`,
  );
});

socket.on('connect', (data) => {
  console.log(socket.id);
});
socket.on('connection', (data) => {
  console.log('Alguien se conecto');
});
