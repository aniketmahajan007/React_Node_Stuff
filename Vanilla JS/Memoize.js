function myMemoize(fn){
    const res = {};
    return function (...args){
        const key = JSON.stringify(args)
        if(!res[key]){
            res[key] = fn.call(this,...args)
        }
        return res[key];
    }
}

const clumsyProduct = function (n1,n2){
    for(let i=0;i<10000000000;i++){}
    return n1*n2;
}
const MemoizeProduct = myMemoize(clumsyProduct);
console.log('Script Started');
// will take time first time
MemoizeProduct(2,3);
console.log('First Call');
// will take time first time
MemoizeProduct(1,3);
console.log('Second call');
// cache result will be shown
MemoizeProduct(2,3);
console.log('Third call');
// will take time first time
MemoizeProduct(5,3);
console.log('Four call');
// cache result will be shown
MemoizeProduct(1,3);
console.log('fifth call');