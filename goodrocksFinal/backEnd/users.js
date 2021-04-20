const express = require("express");
const mongoose = require("mongoose");
const argon2 = require("argon2");

const router = express.Router();

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next();
    }

    try {
        // Generate hash
        const hash = await argon2.hash(this.password);
        this.password = hash;
        next();
    } catch(error) {
        console.log(error);
        next(error);
    }
});

userSchema.methods.comparePassword = async function(password) {
    try {
        const isMatch = await argon2.verify(this.password, password);
        return isMatch;
    } catch(error) {
        return false;
    }
};

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

const User = mongoose.model("user", userSchema);









// Checks for valid users that are logged in
const validUser = async (req, res, next) => {
    console.log("Here");
  if (!req.session.userID)
    return res.status(403).send({
      message: "not logged in"
    });
  try {
    const user = await User.findOne({
      _id: req.session.userID
    });
    if (!user) {
      return res.status(403).send({
        message: "not logged in"
      });
    }

    req.user = user;
  } catch (error) {

    return res.status(403).send({
      message: "not logged in"
    });
  }

  next();
};








/* API Endpoints */

/* All of these endpoints start with "/" here, but will be configured by the
   module that imports this one to use a complete path, such as "/api/user" */

// create a new user
router.post('/', async (req, res) => {
    // This next line often causes errors. I wonder if it's because I'm putting a call to it in Home.vue and it should only be in Favorites? I wonder if it crashes/hangs the server and so it can't process any more requests after. I don't think you really need cookies to pass this assignment, but it would be nice 
    if (!req.body.username || !req.body.password)
        return res.status(400).send({
            message: "username and password are required"
    });

    try {
        const existingUser = await User.findOne({
            username: req.body.username
        });
        if (existingUser)
            return res.status(403).send({
                message: "username already exists"
        });

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password
        });

        await user.save();

        // req.session.userID = user._id;

        return res.send({
            user: user
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.post('/login', async (req, res) => {
    console.log("Here");
    if (!req.body.username || !req.body.password)
        return res.sendStatus(400);

    try {

        const user = await User.findOne({
            username: req.body.username
        });

        if (!user)
            return res.status(403).send({
                message: "username or password is wrong"
        });


        if (!await user.comparePassword(req.body.password))
            return res.status(403).send({
                message: "username or password is wrong"
        });

        // req.session.userID = user._id;

        return res.send({
            user: user
        });
    } catch (error) {
    console.log(error);
    return res.sendStatus(500);
    }
});

// get logged in user
router.get('/', validUser, async (req, res) => {
    try {
        res.send({
            user: req.user
    });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// logout
router.delete("/", validUser, async (req, res) => {
    try {
        req.session = null;
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});




module.exports = {
    routes: router,
    model: User,
    valid: validUser
};
