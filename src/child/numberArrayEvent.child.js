console.log('Child Craeted:' + process.pid);

process.on('message', (message) => {
  const result = randomNumberAcount(message);
  process.send(result);
  setTimeout(process.exit, 1000);
});

const randomNumberAcount = (times) => {
  const cant = times;
  const numbers = {};
  for (let i = 0; i < cant; i++) {
    let random = Math.floor(Math.random() * 1000) + 1;
    if (numbers[random] === undefined) {
      numbers[random] = 1;
    } else {
      numbers[random]++;
    }
  }
  return numbers;
};
