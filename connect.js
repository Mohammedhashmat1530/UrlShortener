// connect.js
const mongoose = require('mongoose');

async function ConnectDB() {
  mongoose.connect('mongodb://localhost:27017/urlShortener', {
    
  });
}

module.exports = {
  ConnectDB,
};
