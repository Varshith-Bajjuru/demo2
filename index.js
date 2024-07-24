function power(x,y){
  for(var i = 0;i<y;i++){
      x *= x
  }
  return x
}

var x = 15 
var y = 23
console.log(power(x,y))
