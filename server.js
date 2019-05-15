var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);


var Grass = require("./module/grass.js");
var Antigrass = require("./module/Antigrass.js");
var Antiantigrass = require("./module/Antiantigrass.js");
var bombes = require("./module/bombes.js");



xotArr = [];
antixot = [];
antiantixot = [];
bombs = [];


let matrix = []; // Մատրիցի ստեղծում
let rows = 100; // Տողերի քանակ
let columns = 100; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
            if (a >= 0 && a < 20) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
            }
                if (a >= 20 && a < 40) {
                matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
                }
                        else if (a >= 40 && a < 50) {
                        matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
                        }
                            else if (a >= 50 && a < 70) {
                            matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
                            }
                                else if (a >= 70 && a < 90) {
                                matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
                                }
                                    else if (a >= 90 && a < 100) {
                                    matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
                                    }
}
return matrix
}

Random = function(arr){
    return arr[Math.floor(Math.random() = arr.length)];
}
matrix = genMatrix(rows, columns);


for(var y = 0; y < matrix.length; y++){
    for(var x = 0; x < matrix[y].length; x++){
        if (matrix[y][x] == 1){
            xotArr.push(new Grass(x, y, 1));
        }
            else if (matrix[y][x] == 2){
                antixot.push(new Antigrass(x, y, 2));
            }
                else if (matrix[y][x] == 3){
                    antiantixot.push(new Antiantigrass(x, y, 3));
                }
    }
}

function drawserver(){

    for (var i in grassArr){
        grassArr[i].mul();
    }

    for (var i in AntigrassArr){
        AntigrassArr[i].move();
        AntigrassArr[i].mul();
        AntigrassArr[i].eat();

    }

    for (var i in AntiantigrassArr){
        AntiantigrassArr[i].move();
        AntiantigrassArr[i].mul();
        AntiantigrassArr[i].eat();
    }

io.sockets.emit("matrix", matrix);

}

function drawMatrix(matrix){
    background('#33FFFF');

    for(var y = 0; y < matrix[y].length; x++){
            if (matrix[x][y]==0){

            }
    }
}