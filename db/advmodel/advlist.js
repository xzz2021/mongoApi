//  model文件夹  。。。。定义封装指定要操作的collection

//  引入封装好的db入口文件

const mongoose = require('../db')


const Schema = mongoose.Schema

const AdvSchema = new Schema({
  url: String ,
  href: String 
})

const AdvModel = mongoose.model('advlist', AdvSchema)

module.exports = AdvModel