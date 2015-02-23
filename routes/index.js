var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var ejs = require('ejs');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
	host: '192.168.56.102',
	port: '3306',
	user: 'popi',
	password: 'db1004',
	database: 'stress'
});


/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Stress-!!!' });
});



router.post('/scale', function(req, res) {

	// console.log(req.body);
	var name = req.body.name;

	var f1 = parseInt(req.body.s1);
	var f2 = parseInt(req.body.s2);
	var f3 = parseInt(req.body.s3);
	var f4 = parseInt(req.body.s4);
	var f5 = parseInt(req.body.s5);
	var f6 = parseInt(req.body.s6);
	var f7 = parseInt(req.body.s7);
	var f8 = parseInt(req.body.s8);
	var f9 = parseInt(req.body.s9);
	var f10 = parseInt(req.body.s10);
	var f11 = parseInt(req.body.s11);
	var f12 = parseInt(req.body.s12);
	var f13 = parseInt(req.body.s13);
	var f14 = parseInt(req.body.s14);
	var f15 = parseInt(req.body.s15);
	var f16 = parseInt(req.body.s16);
	var f17 = parseInt(req.body.s17);
	var f18 = parseInt(req.body.s18);
	var f19 = parseInt(req.body.s19);
	var f20 = parseInt(req.body.s20);
	var f21 = parseInt(req.body.s21);
	var f22 = parseInt(req.body.s22);
	var f23 = parseInt(req.body.s23);
	var f24 = parseInt(req.body.s24);
	var f25 = parseInt(req.body.s25);
	var factor1 = (f6 + f18 + f14 + f9 + f20)/5; //또래관계
	var factor2 = (f10 + f22 + f13 + f16)/4; //학업과 환경: 학업 및 진로
	var factor3 = (f15 + f24 + f17 + f2)/4;//학업과 환경: 자기통제 내외
	var factor4 = (f12 + f8 + f25)/3; //소외감: IT환경
	var factor5 = (f19 + f4 + f11)/3;//소외감: 관계에서의 소외감
	var factor6 = (f7 + f23 + f5)/3; //가정환경: 가정환경
	var factor7 = (f21 + f3 + f1)/3;//가정환경: 부모님의 관심 및 제재

	var info = {
		'name' : req.body.name,
		'school' : req.body.school,
		'grade' : req.body.grade,
		//'birthday' : req.body.birthday,
		's1' : req.body.s1,
		's2' : req.body.s2,
		's3' : req.body.s3,
		's4' : req.body.s4,
		's5' : req.body.s5,
		's6' : req.body.s6,
		's7' : req.body.s7,
		's8' : req.body.s8,
		's9' : req.body.s9,
		's10' : req.body.s10,
		's11' : req.body.s11,
		's12' : req.body.s12,
		's13' : req.body.s13,
		's14' : req.body.s14,
		's15' : req.body.s15,
		's16' : req.body.s16,
		's17' : req.body.s17,
		's18' : req.body.s18,
		's19' : req.body.s19,
		's20' : req.body.s20,
		's21' : req.body.s21,
		's22' : req.body.s22,
		's23' : req.body.s23,
		's24' : req.body.s24,
		's25' : req.body.s25,

	}

	var str = "insert into score set ?";

	var query = connection.query(str, info, function(err, result){
		if(err){
			console.log(err);
		}
		res.render('scale', { name: name, data: info, factor1: factor1, factor2: factor2, factor3: factor3, factor4: factor4, factor5: factor5, factor6: factor6, factor7: factor7, title: 'stress'});
	});
//result: JSON.stringify(req.body)

	//res.render('scale', { title: 'Stress-!!!' });
});


module.exports = router;