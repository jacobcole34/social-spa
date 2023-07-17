const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://deep:thoughts@cluster0.wchpxeq.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
