const express = require('express')

const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// last part of the json web token that will be secret
const jwtSecret = "mynameisibrahimnicetomeetyou";

router.post('/createUser', // username must be an email
  body('email').isEmail(),
  body('name').isLength({ min: 3 }),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),

  // Finds the validation errors in this request and wraps them in an object with handy functions



  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //all functions in bcrypt are async
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        location: req.body.location,
        email: req.body.email
      })
      res.json({ success: true });
    }
    catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })


router.post('/loginUser',body('email').isEmail(), async (req, res) => {
    let email  = req.body.email;
    try {
      let userEmail = await User.findOne({email});
     if(!userEmail){
      return res.status(400).json({ errors:"Entered Email is not in the list"});}

      //we will use bcrypt to compare the password stored as hash in mongodb to user entered password
      const pwdCompare = await bcrypt.compare(req.body.password,userEmail.password);
     if(!pwdCompare){
      return res.status(400).json({ errors:"Entered password for the email is wrong"});}
      //after comparing we will sent authorization token to make sure that whenever user comes again, it is the same user
      // and the data left by him like unused cart is available to him

      //the purpose of data is simple make authtoken of what, we choose id because it will always be unique
      const data={
        user:{
          id:userEmail.id
        }
      }
      //then this is where authToken is created
      const authToken = jwt.sign(data,jwtSecret)

     // now we are sending authtoken as well
    return res.json({success:true,authToken:authToken}) 
    // now as we know if login siccessful we will pass the authtoken value to the front end for this go
    // to login.js and pass the value of json.authToken 
    }
    
    catch (error) {
      console.log(error)
      res.json({ success: false })
    }});


module.exports = router;