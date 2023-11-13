/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
//! User Route

'use strict'
const router=require('express').Router()

const user=require('../controllers/user')
// URL

router.route('/')
    .get(user.list)
    .post(user.create)


router.route('/:id')
    .get(user.read)
    .put(user.update)
    .delete(user.delete)

module.exports=router

