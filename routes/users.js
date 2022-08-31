const User = require('../models/users');

const express = require('express');

const router = express.Router()

//APIs
router.get('/getUsers', async(req, res)=>{
    try{
      const user = await User.find();
      res.json(user);
    }catch(err){
      // res.status(404).json("Something went wrong.");
      console.log(e.message);
      res.status(404).json(e.message);
    }
});
  
router.get('/getUser/:userEmail', async(req, res)=>{
    try{
      const user = await User.find({userEmail: req.params.userEmail});
      res.json(user[0]);
    }catch(err){
      // res.status(404).json("Something went wrong.");
      console.log(e.message);
      res.status(404).json(e.message);
    }
});

// router.patch('/updateUserEmail/:id', async(req, res)=>{
//     try{
//       const user = await User.findByIdAndUpdate(
//         req.params.id, {
//           userEmail: req.body.userEmail
//         },
//         {new: true},
//       );
//       res.json(user);
//     }catch(e){
//       // res.status(404).json("Something went wrong.");
//       console.log(e.message);
//       res.status(404).json(e.message);
//     }
// });
  
router.put('/updateUser/:id', async(req, res)=>{
    try{
      const user = await User.findByIdAndUpdate(
        req.params.id, {
          userName: req.body.userName,
          userAge: req.body.userAge,
          userEmail: req.body.userEmail,
          userPassword: req.body.userPassword,
          isMale: req.body.isMale,
        },
        {new: true},
      );
      res.json(user);
    }catch(e){
      // res.status(404).json("Something went wrong.");
      console.log(e.message);
      res.status(404).json(e.message);
    }
});
  
router.delete('/deleteUser/:id', async (req, res)=>{
    try{
      await User.findByIdAndDelete(req.params.id);
      res.json("Deleted Successfully");
    }catch(e){
      // res.status(404).json("Something went wrong.");
      console.log(e.message);
      res.status(404).json(e.message);
    }
});

module.exports = router;
  