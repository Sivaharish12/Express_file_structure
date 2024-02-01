const express=require('express')
const router=express.Router()

const Number_Controller=require('../Controller/number_controller')

router.post('/add',Number_Controller.Addfunction);

router.post('/sub',Number_Controller.SubtractFunction);

router.post('/mul',Number_Controller.MultiplicationFunction);

router.post('/div',Number_Controller.DivisionFunction);

module.exports=router;