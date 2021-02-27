
exports.min = function min (array) {

  if( array === undefined || !array.length) {
    return 0;
  }
  else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if( array === undefined || !array.length) {
    return 0;
  }
  else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if( array === undefined || !array.length) {
    return 0;
  }
  else{
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const avg = sum / array.length;
    return avg;
  }
}
