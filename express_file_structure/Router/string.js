const express=require('express')
const str_router=express.Router()
const Str_controller=require('../Controller/String_controller')


str_router.get('/concat/:id1/:id2',Str_controller.String_Concat);

str_router.get('/multiply/:id1/:id2',Str_controller.String_Multiplication);

module.exports=str_router;