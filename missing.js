var missing = function(subject){
    var sorted = subject.sort(function(x,y){return x-y;});
    for (let i = 0; i < sorted.length; i++) {
        if(sorted[i] !== i + 1) return i + 1;
    }
    return undefined;
};

console.log(missing([]));
console.log(missing([1,4,3]));
console.log(missing([2,3,4]));
console.log(missing([5,1,4,2]));
console.log(missing([1,2,3,4]));