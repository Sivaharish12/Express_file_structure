exports.String_Concat=(req,res,next)=>{
    str1=req.body.str1;
    str2=req.body.str2;
    res.send(`The string concatenation of ${str1} and ${str2} is ${str1+str2}`);
};


exports.String_Multiplication=(req,res,next)=>{
    str1=req.body.str1;
    number2=req.body.number;
    res.send(`The string multiplication of ${str1} and ${number2} is ${str1.repeat(number2)}`);
}