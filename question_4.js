let arr=[1, 2, 3, 4, 5];

let ans=arr.filter((arr) => arr % 2 == 0).map((arr) => arr**2).reduce((i,j) => i+j);
console.log(ans);