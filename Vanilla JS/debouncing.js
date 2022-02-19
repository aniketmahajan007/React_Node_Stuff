function getValue(){
    console.log('Printing Value');
}
function debounce(fn,delay){
    let Timer;
    return function(...args){
        if(Timer) clearTimeout(Timer);
        Timer = setTimeout(() => {
            fn(...args)
        },delay)
    }
}
const betterFunction  = debounce(getValue,2000);
//Calling a lot of times but executing once;
for(let i=0;i<5;i++){
    betterFunction();
}