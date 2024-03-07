const squares = new Array(65);
const grains = [BigInt(1)];

export const square = (square) => {
  for(let i = 0; i < squares.length; i++){
    grains.push(BigInt(grains[i]) * BigInt(2));
  }

  if(square <= 0 || square > 64){
    throw new Error('square must be between 1 and 64');
  }
  return grains[square - 1];
};

export const total = () => {
  let sum = 0n;
  for(let i = 1; i < squares.length; i++){
    sum += square(i);
  }
  return sum;
};
