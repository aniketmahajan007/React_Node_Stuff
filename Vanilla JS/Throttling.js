function getValue(){
    console.log('Called');
}
function throttling(fn,delay){
    let flag = true;
    return function (){
        if(flag){
            console.log('here');
            flag = false;
            fn();
            setTimeout(() => {
                flag = true;
            },delay);
        }
    }
}
const betterFunction  = throttling(getValue,1000);
//Calling a lot of times but executing once;
for(let i=0;i<5;i++){
    betterFunction();
}
/**
 function getValue(e){
	console.log(e.value);
}
 function throttling(fn,delay){
	let flag = true;
  return function(){
      if(flag){
        fn(this); flag = false;
        setTimeout(() => {
          flag = true;
        },delay);
      }
  }
}
 const betterGetValue = throttling(getValue,2000);
 let inputValue = document.getElementById('inputValue');
 inputValue.addEventListener('keyup',betterGetValue);
 */