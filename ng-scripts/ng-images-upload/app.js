var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const multer = require('multer');
const cors = require('cors');
const mkdirp = require('mkdirp');
const PORT = 1100;
const URL = `http://localhost:${PORT}/`;

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Documents')));


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './Documents/images/uploads';
        mkdirp(dir, err => cb(err, dir))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage })
app.use(cors());

app.post('/uploadMulti', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({ data: {imageUrl: `${URL}images/uploads/${req.file.filename}`,
        imageName: 'images/uploads/'+req.file.filename}});
    }
    else{
        res.status("409").json("No Files to Upload.");
    } 
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;