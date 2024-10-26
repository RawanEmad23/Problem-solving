// اول طريقه

function oddeven(number){
if(number%2===0){
return "even"
}
else{
    return "odd"
}
}

console.log(oddeven(2));



// ثاني طريقه

function oddeven(number){
return number %2===0? "even" :"odd"

}
console.log(oddeven(3));