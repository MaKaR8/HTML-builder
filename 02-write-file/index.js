const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');

fs.writeFile(filePath, '', (err) => {
   if (err) throw err;
});

stdout.write('Введите текст, котоый будет записан в файл text.txt:\n');

stdin.on('data', data => {
   if (data.toString().trim() === 'exit') {
      exit();
   } else {
      fs.appendFile(filePath, data, (err) => {
         if (err) throw err;
      });
   }
});

process.on('SIGINT', function () {
   exit();
});

function exit() {
   stdout.write('Завершение программы, хорошего дня!');
   process.exit();
}