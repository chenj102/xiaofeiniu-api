/**小肥牛扫码点餐项目API子系统 */
console.log('准备启动API服务器');
console.log(new Date().toLocaleString())

const PORT = 8090;
const express =require('express');
const categoryRouter=require('./routes/admin/category');
const cors=require('cors');

//创建HTTP应用服务器
//启动主服务器
var app=express();
app.listen(PORT,()=>{
  console.log('API服务器启动成功');
  console.log('Server Listening '+PORT+' ..');
})
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))
//挂载路由器
app.use('/admin/category',categoryRouter);

