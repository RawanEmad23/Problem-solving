function findneedle(array){
   for(let i=0;i<array.length;i++){
    if(array[i]==="needle"){
        return "hiii  " + i
    }
    
   }
}

console.log(findneedle(["rawan","needle","hh","www"]));
