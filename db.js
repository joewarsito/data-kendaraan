let mongoose = require('mongoose');
var host = "mongodb://localhost:27017/data_kendaraan"

mongoose.connect(host, {
    'useNewUrlParser': true
});
mongoose.set('useCreateIndex', true);