 var matrix = [];
var x = 27;
var y = 27;


for (var k = 0; k < y; k++){
    matrix[k] = [];
        for(var z = 0; z < x; z++){
          matrix[k][z] = 0;  
        }
     }

var xotCount = x*y*70/70;

for(var i = 0; i < xotCount; i++){
    var xx = Math.floor(Math.random()*x);
    var yy = Math.floor(Math.random()*y);
    if(matrix[yy][xx] == 0){
      matrix[yy][xx] = 1;
    }
    else if(matrix[yy][xx] == 1){
      matrix[yy][xx] = 2;
    }
    else if(matrix[yy][xx] == 2){
      matrix[yy][xx] = 3;
    }
    else{
      matrix[yy][xx] = 4;
    }
}
console.log(matrix);

var side = 25;
var xotArr = [];
var antixot = [];
var antiantixot = [];
var bombs = [];

function setup() {
    frameRate(2);
    createCanvas(x * side, y * side);
    background('#acacac');

    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 1){
          var xotik  = new Grass(j, i, 1);
          xotArr.push(xotik);
        }
        else if(matrix[i][j] == 2){
          var anti = new antiGrass(j, i, 2);
          antixot.push(anti);
        }
        else if(matrix[i][j] == 3){
            var antianti = new antiantiGrass(j, i, 3);
          antiantixot.push(antianti);
        }
         else if(matrix[i][j] == 4){
            var bomb = new Bombes(j, i, 4);
          bombs.push(bomb);
        }
        
        
      }
    }  
     
}
console.log(antixot);
console.log(bombs);
function draw() {
    background('#acacac');

  for(var i in xotArr){
    xotArr[i].mul();

  }

  for(var i in antixot){
    antixot[i].eat();
    antixot[i].mul();
  }

  for(var i in antixot){
    

  }


  for(var i in antiantixot){
    antiantixot[i].eat();

  }


  for(var i in bombs){
    bombs[i].boom();

  }

 



  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 2){
         fill("yellow");
        rect(j * side, i * side, side, side);

      }
      else if(matrix[i][j] == 3){
         fill("red");
        rect(j * side, i * side, side, side);

      }
      else if(matrix[i][j] == 4){
         fill("black");
        rect(j * side, i * side, side, side);

      }
    }
  }
}

