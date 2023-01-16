const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;