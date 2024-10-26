// function repeat(){
//     let char ="B" 
//     let rebeatchar=char.repeat(2)
//     return rebeatchar
// }
// console.log(repeat());


function repeatChars(str, times) {
    return str.split('').map(char => char.repeat(times)).join('');
 }
 
 console.log(repeatChars("hello", 3));  // الإخراج: "hhheeelllllooo"
 