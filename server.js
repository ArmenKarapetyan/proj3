var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is runninng")

});

//stex kapum en mer classery
var Grass = require("./module/grass.js");
var GrassEater = require("./module/grassEater.js");
var Predator = require("./module/predator.js");
var Bombes = require("./module/bombes.js");


//haytarum en zanvacnery
grassArr = [];
grasseaterArr = [];
predatorArr = [];
bombesArr = [];

//stexcum en matrix generacnox function
var w = 50;
var h = 60;

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 100);
            if (r < 20) r = 0;
            else if (r < 35) r = 1;
            else if (r < 70) r = 2;
            else if (r < 85) r = 3;
            else if (r < 100) r = 4;
            //else if (r < 100) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}


//stexcum en zangvacic patahakan andam tvox function
Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//kanchum en genMatrix functiony ev talis en matrix popoxakanin
matrix = genMatrix(w, h);

//stex pptvum en matrix-i mejov u stexcum en objectnery
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y, 1));
        }
        else if (matrix[y][x] == 2) {
            grasseaterArr.push(new GrassEater(x, y, 2));
        }
        else if (matrix[y][x] == 3) {
            predatorArr.push(new Predator(x, y, 3));
        }
        else if (matrix[y][x] == 4) {
            bombesArr.push(new Bombes(x, y, 4));
        }
   
    }
}

//stexcum en function vor kkanchi objecteri methodnery ev kuxark matrixi masin datan script.js
function drawserever() {

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        
        grasseaterArr[i].mul();
        grasseaterArr[i].eat();
      
    }
    for (var i in predatorArr) {
       
        predatorArr[i].mul();
        predatorArr[i].eat();
       
    }

    for (var  i in bombesArr){
        bombesArr[i].boom();
    }    

    //matrixy uxarkum en clientin
    io.sockets.emit("matrix", matrix);
   
}


//connectiona stexcum scriptic ekac infoi himan vra script.js i het mousePressed i jamanak
io.on('connection', function (socket) {
    socket.on("Sxmvec", function (arr) {
        var x = arr[0];
        var y = arr[1];
        

        if (matrix[y][x] == 4){
        for(var i in GrassEater){
            if(x == GrassEater[i].x && y == GrassEater[i].y){
                GrassEater.splice(i,1);
                
            }
        }
    }
        matrix[y][x]=0;
    });
});


setInterval(drawserever, 1000);

console.log(matrix);





