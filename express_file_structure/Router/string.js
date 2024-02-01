const express=require('express')
const str_router=express.Router()
const Str_controller=require('../Controller/String_controller')


str_router.post('/concat',Str_controller.String_Concat);

str_router.post('/multiply',Str_controller.String_Multiplication);

module.exports=str_router;