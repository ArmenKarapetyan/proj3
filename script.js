var side = 20;
var socket = io();

//var button = document.getElementById('fire');


//haytarum enq popoxakan exanaki hamar vory kereva menak script.js-um
var weatherclient = "Summer";
//serveri exanaky beruma talisa cleintin
socket.on("exanak", function (w) {
    weatherclient = w;
    // console.log(weather);
});
//setup
function setup() {
    createCanvas(20 * side, 20 * side);
    background('blue');
}

function drawWeather(w) {
    var p = document.getElementById('seasons');
    var weather = w;
    console.log(weather);

    if (weather == "Summer") {
        p.innerText = "Summer";
    } 
        else if (weather == "Winter") {
            p.innerText = "Winter";
        } 
            else if (weather == "Autumn") {
                p.innerText = "Autumn";
            } 
                else if (weather == "Spring") {
                    p.innerText = "Spring";
                }

}



 //nuyn draw functiony uxaki serveric ekac matrixi hashvin 
 function drawMatrix(matrix) {
    background('grey'); 

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("grey");
            }

            else if (matrix[y][x] == 1) {
                if (weatherclient == "Winter") {
                    fill("white");
                } else if (weatherclient == "Summer") {
                    fill("green");
                } else if (weatherclient == "Autumn") {
                    fill("#FF8000");
                } else if (weatherclient == "Spring") {
                    fill("#33FF99");
                }
               
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if(matrix[y][x] == 4){
                fill("black");
            }
            rect(x * side, y * side, side, side); 
        }
    }
 }
//yndunuma serveric matrixy ev kanchuma drawMatrix
socket.on("matrix", drawMatrix);
socket.on("exanak", drawWeather);

//function event kisata grac serverum el code petqa grvi sa vorpes hushum
  function mousePressed() {
     var x = Math.floor(mouseX / side);
     var y = Math.floor(mouseY / side);
     arr = [x, y];
     console.log(arr);
     socket.emit("Sxmvec", arr)
 
 }
