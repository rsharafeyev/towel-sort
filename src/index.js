
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined || !Array.isArray(matrix) || matrix.length == 0)
    return result;
  let i = 1;
  for (item of matrix)
  {
    if (i % 2 == 0)
    {
      result = result.concat(item.reverse());
    } else
    {
      result = result.concat(item);
    }
    i++;
  }
  return result;
}
