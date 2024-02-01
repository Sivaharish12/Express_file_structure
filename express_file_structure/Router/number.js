const express=require('express')
const router=express.Router()

const Number_Controller=require('../Controller/number_controller')

router.get('/add/:id1/:id2',Number_Controller.Addfunction);

router.get('/sub/:id1/:id2',Number_Controller.SubtractFunction);

router.get('/mul/:id1/:id2',Number_Controller.MultiplicationFunction);

router.get('/div/:id1/:id2',Number_Controller.DivisionFunction);

module.exports=router;