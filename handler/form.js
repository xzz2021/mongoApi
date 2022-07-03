// 分别导入要操作的collection-model模块


const advList = require('../db/advmodel/advlist')
const mmList = require('../db/mmmodel/mmlist')



exports.getadv = (req, res) => {

  let skipNum = req.index * 10
  const findAdv = async () => {
    const result = await advList.find({},{_id: 0})
    // console.log(result)
    res.send({
          message: '获取数据成功!',
          advList: result
      })
  }

  findAdv()


}


exports.getmm = (req, res) => {
let skipNum = 0
let limitNum = 0
  const findMM = async () => {
    const result = await mmList.find({},{_id: 0}).skip(skipNum).limit(limitNum)
    // console.log(result)
    res.send({
          message: '获取数据成功!',
          mmList: result
      })
  }

  findMM()


}

