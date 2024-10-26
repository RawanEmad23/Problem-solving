
// الحل ده لو عايزني امسح اصغر رقم واكبر رقم واجمع الباقي بشرط ممسجش الرقم لو متكرر تاني


function sum(arr){
   if(arr==null) return 0;
return arr.sort((a,b)=>a-b).slice(1,-1).reduce((acc,current)=>acc+current)
}
console.log(sum([1,1,2,3,4,9]));


// الحل ده لو عايزني امسح اصغر رقم واكبر رقم واجمع الباقي هنا لو الرقم متكرر هشيله عادي




function sum2(arr) {
    if (arr == null) return 0;

    let maxvalue = Math.max(...arr);
    let minvalue = Math.min(...arr);

    let filterdarr = arr.filter((x) => x != maxvalue && x != minvalue)
                        .reduce((acc, current) => acc + current, 0);
    
    return filterdarr; 
}
console.log(sum2([1, 2, 3, 4, 9])); 
