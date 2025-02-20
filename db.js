const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/dbs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => console.log("MongoDB connection error:", err));

const db = mongoose.connection;

db.on("error", (err) => console.error("❌ MongoDB connection error:", err));
db.on("disconnected", () => {
    console.log("⚠️  Mongoose server disconnected. Reconnecting...");
    mongoose.connect(mongoURL); // Auto-reconnect
});

module.exports = db;
