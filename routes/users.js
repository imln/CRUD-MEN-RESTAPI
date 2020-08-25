const express = require('express')
const router = express.Router()
const User = require('../models/user')



router.get('/', async function(req,res){
    try{
        console.log('try block...')
        const user = await User.find()
        res.json(user)
    }catch(err){
        console.log('Error...')
        res.send('Error '+err)
    }
})


router.get('/:id', async function(req,res){
    try{
        console.log('try block...')
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        console.log('Error...')
        res.send('Error '+err)
    }
})

router.patch('/:id', async function(req,res){
    try{
        const user = await User.findById(req.param.id)
        user.status = req.body.stat
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send('Error '+ err)
    }
})


router.post('/', async function(req,res){

    const user = new User({
        name : req.body.name,
        userType : req.body.type,
        status : req.body.status
    })

    try{
        const u1 = await user.save()
        res.json(u1)

    }catch(err){
        console.log('Error...')
        res.send('Erroe '+err)
    }
})





module.exports = router