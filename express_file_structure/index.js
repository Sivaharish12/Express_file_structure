const express=require('express')
const app=express()

const Number_routes=require('./Router/number')
const Str_routes=require('./Router/string')

app.use(express.json());
app.use("/numbers",Number_routes);
app.use("/string",Str_routes);

app.listen(5000);