const express= require('express')
const { findUserById, fetchAllUsers, updateUser } = require('../controller/UserController')
const router= express.Router()

router.get('/',fetchAllUsers).get('/:id', findUserById).patch('/:id',updateUser)

exports.router= router