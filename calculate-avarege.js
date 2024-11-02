function calculateavarege(array){
// let sum =0
// for(let i=0;i<array.length;i++){
//     sum+=array[i];
  

// }
// let avarege=sum/array.length
// return avarege


return array.reduce((acc,current)=>acc+current,0)/array.length
}

console.log(calculateavarege([1,2,3,6]));
