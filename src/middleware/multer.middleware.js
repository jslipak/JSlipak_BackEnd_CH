const multer = require('multer');

//const storage = multer.diskStorage({
//destination: function (req, file, cb) {
//cb(null, './src/my-uploads');
//},
//filename: function (req, file, cb) {
//cb(null, file.fieldname + '-' + Date.now() + '.jpg');
//},
//});
const storage = multer.memoryStorage();

module.exports = multer({ storage: storage });
