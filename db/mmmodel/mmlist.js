//  model文件夹  。。。。定义封装指定要操作的collection

//  引入封装好的db入口文件

const mongoose = require('../db')


const Schema = mongoose.Schema

const mmSchema = new Schema({
  mmimg: [{url: String}] ,
  name: String ,
  age: Number ,
  priceRange: String,
  describe: String ,
})

const mmModel = mongoose.model('mmlist', mmSchema)

module.exports = mmModel