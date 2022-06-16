
// 因为安全原因故此入口文件为示范，实际运用把此文件名改为db.js

const mongoose = require('mongoose')

const url = 'mongodb://你的用户名:你的密码@你的ip:27017/你的数据库collection'


// 创建连接
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 连接成功
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection successful!');
})

// 连接异常
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
})

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

module.exports = mongoose