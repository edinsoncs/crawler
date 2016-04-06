var express = require('express');
var Crawler = require('crawler');
var url = require('url');
//Utilizaremos crawler

var servidor = express();


var isCrawler = new Crawler({
	//por defecto vamos a tener 10 conneciones
	maxConnections: 10,
	callback: function(err, res, $){
		$('a').each(function(index, a){
			var isUrl = $(a).attr('href');
		});
	}

});

isCrawler.queue([{
	uri: 'http://www.viajobien.com',
	jQuery: false,

	callback: function(err, res){
		console.log(res.body);
	}
}]);

function puerto(num){
	num = 3000;
	return num;
}
servidor.listen(puerto(), function(){
	console.log('servidor corriendo');
});