const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  mongoClient.connect('mongodb+srv://anpnb79:thienha10@cluster0.h4ybele.mongodb.net/nodeJsMongo?retryWrites=true&w=majority&appName=Cluster0')
  .then(client => {
    console.log('Kết nối thành công');
    _db = client.db('nodeJsMongo');
    callback();
  })
  .catch(err => {
    console.error('Lỗi kết nối:', err);
    throw(err);
  });
}

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'Không có kết nối đến cơ sở dữ liệu'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
