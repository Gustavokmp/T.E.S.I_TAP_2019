const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors')


const PORTA = 4444;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors())

/* ROTAS */
app.use('/auth', require('./controller/autorizacao'));
app.use('/usuario', require('./controller/usuario'));
app.get('*', (req, res) => res.send('404'));

var server = app.listen(PORTA, () => {
    console.log('Aplicação no ar em http://localhost:' + PORTA)
});
const io = require('socket.io')(http);
io.listen(server);

/* SOCKET */
const documents = {};


io.on("connection", socket => {
    let previousId;
    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId);
      previousId = currentId;
    };
  
    socket.on("getDoc", docId => {
      safeJoin(docId);
      socket.emit("document", documents[docId]);
    });
  
    socket.on("addDoc", doc => {
      documents[doc.id] = doc;
      safeJoin(doc.id);
      io.emit("documents", Object.keys(documents));
      socket.emit("document", doc);
    });
  
    socket.on("editDoc", doc => {
      documents[doc.id] = doc;
      socket.to(doc.id).emit("document", doc);
    });
  
    io.emit("documents", Object.keys(documents));
  });
  
