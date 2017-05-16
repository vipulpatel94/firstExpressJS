var express = require('express'),
    app = express(),
    port = 3000;

app.get('/:name' , function (request, response) {
    console.log(request.query); //to get query parse variables
    response.status(200);
    response.set('Content-text' , 'text/html');
    response.send("<html><body><h1>Hello " +
        request.params.name +
        "</h1></body></html>"
    );
});

// app.set('newtest', true);

// console.log(app.disabled('newtest'));

app.get('/' , function (request, response) {
    response.end("Hello World");
});

app.listen(port, function () {
    console.log("Server on go to :- http://localhost:" + port);
});