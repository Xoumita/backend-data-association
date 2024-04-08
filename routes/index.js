var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req, res, next) {
  let createduser = await userModel.create({
    username: "Soumita",
    password: "bulisimu",
    fullname: "Soumita Banerjee",
    email: "soumita.learning@female.com",
    posts: []
  })
  res.send(createduser)
});
router.get('/createpost', async function(req, res, next) {
  let createdpost = await postModel.create({
    postText: "hello everyone kaise ho ",
    user: '661011c9fb0b32b72163b068'
  })
  let user = await userModel.findOne({_id: "661011c9fb0b32b72163b068"});
  user.posts.push(createdpost._id);
  await user.save()
  res.send("done")
});

router.get("/alluserposts", async function(req, res, next){
  let user = await userModel.findOne({_id: '661011c9fb0b32b72163b068'}).populate('posts')
  res.send(user)
})

module.exports = router;
