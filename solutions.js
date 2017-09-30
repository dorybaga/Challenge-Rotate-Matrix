if(direction === "ClockWise") { // CLOCKWISE
      var tempCWMatrix = [];
      var counter = 0;

      for(var i = 0; i < this.matrix.length; i++) {
        tempCWMatrix.push([]);
      }

      while(counter < this.matrix.length) {
        for(var j = this.matrix.length - 1; j >= 0; j--) {
          tempCWMatrix[counter].push(this.matrix[j][counter]);
        }
        counter++;
      }
      this.matrix = tempCWMatrix;

    } else if(direction === "CounterClockWise") { // COUNTER CLOCK WISE

      var tempCCWMatrix = [];
      var counterCCW = 0;
      var counter2 = this.matrix.length - 1;

      for(var k = 0; k < this.matrix.length; k++) {
        tempCCWMatrix.push([]);
      }

      while(counterCCW < this.matrix.length) {
        for(var l = 0; l < this.matrix.length; l++) {
          console.log(this.matrix[l][counterCCW]);
          tempCCWMatrix[counterCCW].push(this.matrix[l][counter2]);
        }
        counter2--;
        counterCCW++;
      }
      this.matrix = tempCCWMatrix;
    }

// another solution:

Array.prototype.transpose = function () {

    // Calculate the width and height of the Array
    var a = this,
        w = a.length ? a.length : 0,
        h = a[0] instanceof Array ? a[0].length : 0;

    // In case it is a zero matrix, no transpose routine needed.
    if (h === 0 || w === 0) {
        return [];
    }

    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];

    // Loop through every item in the outer array (height)
    for (i = 0; i < h; i++) {

        // Insert a new row (array)
        t[i] = [];

        // Loop through every item per item in outer array (width)
        for (j = 0; j < w; j++) {

            // Save transposed data.
            t[i][j] = a[j][i];
        }
    }

    return t;
};
