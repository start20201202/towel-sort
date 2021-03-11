
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
let newMatrix = [];
  matrix.forEach(function(elem, index){
    if(index%2!=0) {
      newMatrix = newMatrix.concat(elem.reverse());

    }else newMatrix = newMatrix.concat(elem);
  });
return newMatrix;
}
