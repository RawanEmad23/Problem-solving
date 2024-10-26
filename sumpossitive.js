//الطريقه الاولي
  
let arr =[1,-4,7,12]


function sumpossitivenumbers(arr){
    let initialvalue=0;
for (let i=0;i<arr.length;i++){
if(arr[i] >0){
 initialvalue+=arr[i]
}
}
return initialvalue;

}

console.log(sumpossitivenumbers(arr));



//الطريقه الثانيه 

function sumpossitivenumbers(arr){
return arr.filter((arr)=>arr >0).reduce((acc,current)=>acc+current)


}

console.log(sumpossitivenumbers([1,-2,9,2]));