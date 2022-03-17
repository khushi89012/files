const express = require("express");
const uploads = require("../middlewares/upload");
const User = require("../models/user.model")
const router = express.Router()


router.post("/users",uploads.single("profile-pic"),async(req,res)=>{
    try {
        const user = await User.create({
            firstname :req.body.firstname,
            lastname:req.body.lastname
        })
        return res.status(201).send(user)
        

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.post("/multiple", upload.any("profilePic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const user = await User.create({
        firstName: req.body.firstName,
        profilePic: filePaths,
      });
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
// router.get("/user", async (req, res) => {
//     try {
//       const users = await User.find().lean().exec();
  
//       return res.status(200).send(users);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   });




module.exports = router;