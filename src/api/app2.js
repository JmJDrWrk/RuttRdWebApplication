var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
const cors = require('cors')
var usersRouter = require('./Routes/users.routes');
var adminRouter = require('./Routes/admin.routes');

var app = new express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const corsOptions = {
  origin: "*",
}
app.use(cors(corsOptions))

const dbURI = process.env['dbURI']
//const dbURI = process.env.dbURI;
console.log('process.env: ' + process.env['token'])
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use('/users', usersRouter);
app.use('/admin', adminRouter)

//Socket
io.on('connection', function(socket) {
  socket.on('pulse', function(position) {
    socket.broadcast.emit('sync', position);
    console.log('Server get position like ', position)
  });
});

app.get('/', function(req, res) {
  res.send('HTTP SERVER [RUNNING]');
});

http.listen(port, function() {
  console.log('Server listening at: %s', port)
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});