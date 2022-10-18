var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/listprice', function(request, response) {
	var jsonObj = [	{'price':'100' , 'unit':'EUR' },
					{'price':'50.00' , 'unit':'EUR' },
					{'price':'11.11' , 'unit':'USD' }
				];
	response.setHeader('Content-Type', 'application/json; charset=utf-8');
	response.setHeader('Data-Type', 'json');
	response.send(JSON.stringify(jsonObj))
})

app.listen(app.get('port'), function() {
  console.log("Code is running at http://localhost:" + app.get('port'))
})
