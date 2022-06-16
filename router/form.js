// 所有接口均需调用express 然后由express调用Router
const express = require('express')
const router = express.Router()

// 导入引用的处理函数模块
const formHandler = require('../handler/form')

router.get('/getadv', formHandler.getadv)
router.get('/getmm', formHandler.getmm)

module.exports = router