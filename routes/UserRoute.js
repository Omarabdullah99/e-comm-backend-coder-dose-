const express= require('express')
const { findUserById, fetchAllUsers } = require('../controller/UserController')
const router= express.Router()

router.get('/',fetchAllUsers).get('/:id', findUserById)

exports.router= router