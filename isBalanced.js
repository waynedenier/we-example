
var isOpener = function(c){
    switch (c) {
        case '{':
        case '[':
        case '(':
            return true;
            break;
        default:
            return false;
            break;
    }
}

var getBraceType = function(c){
    switch (c) {
        case '{':
        case '}':
            return 1;
            break;
        case '[':
        case ']':
            return 2;
            break;
        case '(':
        case ')':
            return 3;
            break;
        default:
            return 0;
            break;
    }
}

var isBalanced = function(subject){
    var characterArray = subject.split("");
    var onlyBraces = characterArray.filter(function(c){
        return (c == '{' || c == '}' || c == '[' || c == ']' || c == '(' || c == ')');
    });
    
    var currentOpenBraces = [];

    for (let i = 0; i < onlyBraces.length; i++) {
        const element = onlyBraces[i];
        if(isOpener(element)){
            currentOpenBraces.push(element);
        } else {
            var lastBraceType = getBraceType(currentOpenBraces[currentOpenBraces.length-1]);
            if(getBraceType(element) !== lastBraceType){
                return false;
            } else {
                currentOpenBraces.pop();
            }
        }
    }

    if(currentOpenBraces.length > 0)
        return false;

    return true;
};

console.log(isBalanced('(foo {bar (baz) [boo]})'));
console.log(isBalanced('foo {bar { baz }'));
console.log(isBalanced('foo {(bar [baz]})'));