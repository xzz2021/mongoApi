// 分别导入要操作的collection-model模块


const advList = require('../db/advmodel/advlist')
const mmList = require('../db/advmodel/mmlist')



exports.getadv = (req, res) => {


  const findMethods = async () => {
    const result = await advList.find({},{_id: 0})
    console.log(result)
    res.send({
          message: '获取数据成功!',
          advList: result
      })
  }

findMethods()


}