var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

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

Weather = "Summer";
Weatherinit = 1;
Grassinit = 0;
GrassEaterinit = 0;
Predatorinit = 0;
Bombesinit = 0;


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
            Grassinit++;
        }
        else if (matrix[y][x] == 2) {
            grasseaterArr.push(new GrassEater(x, y, 2));
            GrassEaterinit++;
        }
        else if (matrix[y][x] == 3) {
            predatorArr.push(new Predator(x, y, 3));
            Predatorinit++;
        }
        else if (matrix[y][x] == 4) {
            bombesArr.push(new Bombes(x, y, 4));
            Bombesinit++;
        }
   
    }
}

//stexcum en function vor kkanchi objecteri methodnery ev kuxark matrixi masin datan script.js
function drawserever() {

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].mul();
        grasseaterArr[i].eat();
      
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].mul();
        predatorArr[i].eat();
       
    }

    for (var  i in bombesArr){
        // bombesArr[i].boom();
    }    

    //matrixy uxarkum en clientin
    io.sockets.emit("matrix", matrix);
   
}

function draw_wheater() {

    Weatherinit++;
    if (Weatherinit == 5) {
        Weatherinit = 1;
    }
    if (Weatherinit == 4) {
        Weather = "Spring";
    }
    if (Weatherinit == 3) {
        Weather = "Winter";
    }
    if (Weatherinit == 2) {
        Weather = "Autumn";
    }
    if (Weatherinit == 1) {
        Weather = "Summer";
    }
   
    io.sockets.emit("exanak", Weather);
}



//connectiona stexcum scriptic ekac infoi himan vra script.js i het mousePressed i jamanak
io.on('connection', function (socket) {
    socket.on("Sxmvec", function (arr) {
        var x = arr[0];
        var y = arr[1];
    

        if (matrix[y][x] == 4){
        for(var i in bombesArr){
            if(x == bombesArr[i].x && y == bombesArr[i].y){
                bombesArr.splice(i,1);
                
            }
         }
        matrix[y][x]=1;
        }
        
            if(matrix[y][x] == 4 && matrix[y-1][x-1] == 2){
        for(var i in grasseaterArr){
            if (x-1 == grasseaterArr[i].x && y-1 == grasseaterArr[i].y){
                grasseaterArr.splice(i,1);
                
            }
            
        }
        matrix[y-1][x-1]=1;
    }
        for(var i in grasseaterArr){
            if (x == grasseaterArr[i].x && y-1 == grasseaterArr[i].y-1){
                grasseaterArr.splice(i,1);
                matrix[y-1][x]=1;
            }
        

        }
        for(var i in grasseaterArr){
            if (x+1 == grasseaterArr[i].x+1 && y-1 == grasseaterArr[i].y-1){
                grasseaterArr.splice(i,1);
                matrix[y-1][x+1]=1;
            }
           
        }
        for(var i in grasseaterArr){
            if (x-1 == grasseaterArr[i].x-1 && y == grasseaterArr[i].y){
                grasseaterArr.splice(i,1);
                matrix[y][x-1]=1;
            }
            
        }
        for(var i in grasseaterArr){
            if (x+1 == grasseaterArr[i].x+1 && y == grasseaterArr[i].y){
                grasseaterArr.splice(i,1);
                matrix[y][x+1]=1;
            }
            
        }
        for(var i in grasseaterArr){
            if (x-1 == grasseaterArr[i].x-1 && y+1 == grasseaterArr[i].y+1){
                grasseaterArr.splice(i,1);
                matrix[y+1][x-1]=1;
            }
            
        }
        for(var i in grasseaterArr){
            if (x == grasseaterArr[i].x && y+1 == grasseaterArr[i].y+1){
                grasseaterArr.splice(i,1);
                matrix[y+1][x]=1;
            }
          
        }
        for(var i in grasseaterArr){
            if (x+1 == grasseaterArr[i].x+1 && y+1 == grasseaterArr[i].y+1){
                grasseaterArr.splice(i,1);
                matrix[y+1][x+1]=1;
            }
            
        }

    


        
            });
});

var obj = { "info": [] };

function main() {
    var file = "Statistics.json";
    obj.info.push({ "Xoter qanaky": Grassinit, "Xotakerneri qanaky": GrassEaterinit, "Gishatichneri qanaky": Predatorinit});
    fs.writeFileSync(file, JSON.stringify(obj,null,3));
}


setInterval(drawserever, 1500);
setInterval(draw_wheater, 6000);
setInterval(main, 3000)

console.log(matrix);





