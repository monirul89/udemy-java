//statement

// function someFun(par){
//     //code
// }
// var someFun = function(par){

// }

// //Expressions
// 3+4;
// var x = 3;
// // statements
// if(x === 5){
//     //do something
// }

var height;
height = 23;
if(height || height === 0){
    console.log('Variable is defined');

}else{
    console.log('Variable has not been defined');
}

if (height==23){
    console.log('Variable is equal');
}else{
    console.log('Variable has not been defined');
}


// array 

var names = ['Jone', 'Mone', 'Jony'];

var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1]= 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);
// alert(john.indexOf('teacher'));

if(john.indexOf('teacher')===-1){
    console.log('John is NOT a teacher');
}


