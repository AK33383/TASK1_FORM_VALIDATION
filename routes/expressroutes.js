const express = require('express')
const { fetch_all,fetch_one,sign_up,log_in,update_one,delete_one,delete_all, success_page, failed_page } = require('../controller/controles')



const router = express.Router()
const mongoosemodel = require('../model/mongoosemodel')


router.get('/',(req,res)=>{
    res.send('hello ayyankalai')
})
router.post('/post',async(req,res)=>{

      
    const data = new mongoosemodel({
        name:req.body.name,
        email:req.body.email
    })


    const val=await data.save()
    res.json(val)


})

router.post('/signUp',sign_up)
router.post('/logIn',log_in)



router.get('/fetchdataOne/:id',fetch_one)


module.exports = router