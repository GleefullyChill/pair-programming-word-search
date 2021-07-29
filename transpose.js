const transpose = function(matrix) {
  let newM = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newM.push([]);
  };
  for(let i = 0; i < matrix.length; i++) {
    
    for(let j = 0; j < matrix[i].length; j++) {
      // newM[j][i] = 0;
      newM[j].push(matrix[i][j]); 
      //newM[j] = matrix[j] [i];
    } 
  }
  return newM;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}
module.exports = transpose;