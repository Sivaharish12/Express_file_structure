exports.Addfunction=(req,res,next)=>{
    const para1=req.body.num1;
    const para2=req.body.num2;
    res.send(`The Addition of ${para1} and ${para2} is ${para1+para2}`);
}


exports.SubtractFunction=(req,res,next)=>{
    const number1=req.body.num1;
    const number2=req.body.num2;
    res.send(`The Subtraction of ${number1} and ${number2} is ${number1-number2}`);
}


exports.MultiplicationFunction=(req,res,next)=>{
    const number1=req.body.num1;
    const number2=req.body.num2;
    res.send(`The Multiplication of ${number1} and ${number2} is ${number1*number2}`);
}


exports.DivisionFunction=(req,res,next)=>{
    const number1=req.body.num1;
    const number2=req.body.num2;
    res.send(`The Division of ${number1} and ${number2} is ${number1/number2}`)
}

// --------------------------------------------------------------------------------------------------------------------------------------

//  //INPUT IN POSTMAN
// {
//     "num1":10,
//     "num2":5
// }