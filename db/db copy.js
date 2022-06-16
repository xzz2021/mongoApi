// // // 此处导入mongoose模块  并封装连接数据库功能

// const mongoose = require('mongoose')
// // const url = 'mongodb://xzz:zxc...@51.79.254.187:27017/xzz2022?authSource=xzz2022'
// const url = 'mongodb://xzz:zxc...@51.79.254.187:27017/xzz2022?authSource=xzz2022'


// // 创建数据库连接对象
// //  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false })
//  mongoose.connect(url, { useNewUrlParser: true })

//  const db =  mongoose.connection

//  db.on('connected', () => {
//   console.log('数据库连接成功')
// })

// db.on('disconnected', () => {
//   console.log('数据库断开')
// })

// db.on('error', () => {
//   console.log('数据库连接异常')
// })
 


// // // 向外导出暴露对象
// module.exports = db




// 原生mongodb语法。。。。。。。。。。。

const { MongoClient } = require("mongodb")

const url = 'mongodb://xzz:zxc...@51.79.254.187:27017/xzz2022?authSource=xzz2022'

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true})

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect()
//     // Establish and verify connection
//      await client.db("xzz2022")
//     console.log("Connected successfully to server")
//     // let advlist = db.collection('advlist')
//     // let re = await advlist.find()
//     // console.log(await re.toArray({},{_id: 0}))
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }
// run().catch(console.dir)


// 封装增删改查函数


// async function find(colname) {
//   try {
//     // Connect the client to the server
//     await client.connect()
//     // Establish and verify connection
//     let db = await client.db("xzz2022")
//     let re = db.collection(colname)
//     let res = await re.find().toArray()
//     return res
//     // console.log(res)
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }


// find('advlist').catch(console.dir)

// // // 向外导出暴露对象
module.exports = client



