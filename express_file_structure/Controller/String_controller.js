exports.String_Concat=(req,res,next)=>{
    str1=req.params.id1;
    str2=req.params.id2;
    res.send(`The string concatenation of ${str1} and ${str2} is ${str1+str2}`);
};


exports.String_Multiplication=(req,res,next)=>{
    str1=req.params.id1;
    number2=parseInt(req.params.id2,10);
    res.send(`The string multiplication of ${str1} and ${number2} is ${str1.repeat(number2)}`);
}