const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3003;

// DOCUMENTACION
// FILE SYSTEM NODEJS
// EXPRESS ROUTES
// JAVASCRIPT DOCUMENTACION DE FIREFOX

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/status', (req, res) => {

  console.log('REQUEST', req);
  res.send('Todo chido por aqui');
});

app.get('/users', (req, res) => {

  // LEER JSON Y RETORNAR LISTA DE USUARIOSsadsadas
  fs.readFile('users.json', "utf8", (err, data) => {
    if (err) throw err;
    res.status(200).send(JSON.parse(data).users);
  });
});

app.post('/users', (req, res) => {
  const body = req.body;

  // LEER EL BODY EN REQ Y AÑADIR EL USUARIO A NUESTRA BASE DE DATOS
  fs.readFile('users.json', "utf8", (err, data) => {
    if (err) throw err;
    const usersJson = JSON.parse(data);
    const length = usersJson.users.length;
    const id = length ? usersJson.users[length - 1].id + 1 : 1;
    usersJson.users.push({
      id,
      name: body.name,
      age: body.age,
    });

    fs.writeFile('users.json', JSON.stringify(usersJson), (err) => {
      if (err) throw err;
      res.status(200).send(usersJson.users);
    });
  });

});

app.put('/users/:id', (req, res) => {

  // BUSCAR EL USUARIO POR ID Y HACER UN OVERWRITE DE SU REGISTRO
});

app.delete('/users/:id', (req, res) => {

  // BUSCAR EL USUARIO POR ID Y ELIMINAR EL REGISTRO DEL ARRAY
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));