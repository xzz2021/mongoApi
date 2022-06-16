//  此处封装增删改查方法

const list = require('./mmlist')

// 增
const newdata = {
  url: '../../static/56.jpg',
  href: 'http://xzz2026.top',
}

const insertMethods = async () => {
  const data = new list(newdata)
  const result = await data.save()
  console.log(result)
}

// 查
const findMethods = async () => {
  const result = await User.find()
  console.log(result)
}

// 改
const updateMethods = async () => {
  const result = await User.updateOne({ name: 'brian' }, {
    email: 'imooc@imooc.com'
  })
  console.log(result)
}

// 删
const deleteMethods = async () => {
  const result = await User.deleteOne({ name: 'brian' })
  console.log(result)
}


// insertMethods()