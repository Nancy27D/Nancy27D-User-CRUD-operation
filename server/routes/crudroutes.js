const express=require('express');
const { getData ,insertUser,getUserById ,updateById,deleteById,searchUser} = require('../controllers/crudcontroller');
const router=express.Router();

router.get("/getdata",getData)   

router.post("/insertUser",insertUser)

router.get("/getuser/:id",getUserById)

router.patch("/updateuser/:id",updateById) //edit user

router.delete("/deleteuser/:id",deleteById)
router.get("/s/:key",searchUser)

module.exports=router;