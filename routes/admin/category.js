/**
 * 菜品类别相关的路由
 */

//创建路由器
const express=require('express');
const pool=require('../../pool');
var router=express.Router();
module.exports=router;

/**
 * API: GET /admin/category
 * 含义：客户端获取所有的菜品类别，按编号升序排列
 * 返回值刑如：
 *  [{cid:1,cname:'..'},{...}]
 */
router.get('/',(req,res)=>{
  pool.query('SELECT * FROM xfn_category ORDER BY cid',(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})


/**
 * API: DELETE /admin/category
 * 含义：根据表示菜品编号的路由参数，删除该菜品
 * 返回值刑如：
 *  {code:200,msg:'1 category deleted'}
 *  {code:400,msg:'0 category deleted'}
 */
router.delete('/:cid',(req,res)=>{
  pool.query('DELETE * FROM xfn_category WHERE cid=?',req.params.cid,(err,result)=>{
    if(err) throw err;
    //获取DELETE语句在数据库中影响的行数
    if(result.affectedRows>0){
      res.send({code:200,msg:'1 category deleted'});
    }else{
      res.send({code:400,msg:'0 category deleted'});
    }
  })
})

/**
 * API: POST /admin/category
 * 请求参数：{cname:'xxx'}
 * 含义：添加新的菜品类别
 * 返回值刑如：
 *  {code:200,msg:'1 category added',cid:x}
 */


/**
 * API: PUT /admin/category
 * 请求参数：{cid:xx,cname:'xxx'}
 * 含义：根据菜品类别编号修改该类别
 * 返回值刑如：
 *  {code:200,msg:'1 category modified'}
 *  {code:400,msg:'0 category modified,not exists'}
 *  {code:401,msg:'0 category modified,no modification'}
 */


