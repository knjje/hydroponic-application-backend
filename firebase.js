// const app = initializeApp(firebaseConfig);
// const db = admin.database();
// const rdb = getDatabase(app, "https://test-esp32-14072-default-rtdb.firebaseio.com");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-esp32-14072-default-rtdb.firebaseio.com"
});

const { getDatabase } = require("firebase-admin/database");
const app = admin.app();
const db = admin.database();
const rdb = getDatabase(app);

module.exports = { admin, db, rdb };