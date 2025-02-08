const mongoose = require('mongoose');

const debug = require("debug")("production:mongoose"); // Set DEBUG=development:mongoose  in environment variables
mongoose
  .connect(process.env.MONGODB_URI )
  .then(() => {
    debug('Connected to MongoDB');
  })
  .catch((err) => {
    debug('Error connecting to MongoDB:', err);
    process.exit(1); 
  });
module.exports = mongoose.connection;
