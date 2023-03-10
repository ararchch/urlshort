const { initializeApp } = require('firebase/app');

// firebase setup 
module.exports = initializeApp({
    apiKey: "AIzaSyAhmt3Kf7KGjE5eyRQDTZ9kPRcN_4416_Y",
    databaseURL: "https://urlshortener-4a970-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "urlshortener-4a970",
});
