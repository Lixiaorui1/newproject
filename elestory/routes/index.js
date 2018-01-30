var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
var md5 = require("md5");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 注册
router.post('/api/userajax',function (req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var result = {
		code: 1,
		message: "用户信息保存成功"
	};
	UserModel.find({username:username},function (err,docs) {
		if(docs.length > 0) {
			result.code = -109;
			result.message = "您的用户名已经被占用，请使用别的用户名注册。";
			res.json(result);
			return;
		}
		//注册用户
		var um = new UserModel();
		um.username = username;
		um.password = md5(password);
		um.save(function (err) {
			if(err) {
				result.code = -110;
				result.message = "注册失败";
				res.send("注册失败");
			}
			res.json(result);
		});

	});
});


module.exports = router;
