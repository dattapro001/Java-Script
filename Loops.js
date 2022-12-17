//alert("javabox2");

//for loops
for(let i=0;i<=2;i++){
    console.log('In loop',i);
}
console.log('loop finished');


const names=['mugdho','rittika','chinmoy'];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

//While Loops
let i=0;
let j=0;
while(i<3){
    console.log(i);
    i++;
const java=['bristy','sunamoni','rittika'];
while(j<java.length){
    console.log(java[j]);
    j++;

}
}

//do while loops
do{
     console.log('value of i is:',i);
       i++;
    }while(i<5);

//if statement
const age=25;
if(age>20){
    console.log('you are over 20 year old');
} 
if(names.length>2){
    console.log("yes names in range");
} 
// if-else statement 
const pass='pass@007';
if(pass.length>=5){
   console.log('this pass is long enough'); 
}
else if(pass.length>=3){
    console.log('Perfect password');
}
else if(pass.length>=4 && pass.includes('@')){
    console.log('satisfied both in pass');
}
else{
    console.log('this password not log enough');
}

//logical not
let user=false;
if(!user){
  console.log('this user');  
}

//break and continue
const score=[40,50,56,70,12];
for(let i=0;i<score.length;i++){
    console.log('you score',score[i]);

    if(score[i]==50){
        continue;
    }

    if(score[i]==50){
        console.log('you have pass mark');
      break;
    }
}

//switch statement
const grade='A';
switch(grade){
    case'A':
    console.log('You got A');
    break;
    case'B':
    console.log('You got B');
    break;
    case'C':
    console.log('You got C');
    break;
    case'D':
    console.log('You got D');
    break;
    case'E':
    console.log('You got E');
    break;
    case'A+':
    console.log('you got A+');
    break;
    default:
        console.log('Invalid Grade');
}