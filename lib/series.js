'use strict';

function Series(num_string){
  // add your solution here!
  this.digits = num_string.split('').map(Number);
};

Series.prototype.slices = function(num){
  if (num > this.digits.length) {
    throw new Error("Slice size is too big.");
  }
  else {
    var final_arr = [];
    for (var i=0; i<=(this.digits.length - num); i++) {
      final_arr.push(this.digits.slice(i,i + num));
    }
    return final_arr
  }
}
