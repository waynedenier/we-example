
var getDepthIncrease = function(c){
    switch (c) {
        case '{':
        case '[':
        case '(':
            return 1;
            break;
        case '}':
        case ']':
        case ')':
            return -1;
            break;
        default:
            return 0;
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

    console.log(onlyBraces);

    var lastBracket = getBraceType(onlyBraces[0]);
    var depth = 1;
    for (let i = 1; i < onlyBraces.length; i++) {
        var bracket = onlyBraces[i];
        var depthIncrease = getDepthIncrease(bracket);
        depth += depthIncrease;
        if(lastBracket !== getBraceType(bracket) && depthIncrease == -1){ return false; }
        lastBracket = bracket;
    }

    //if(depth != 1)
    //    return false;

    return true;
};

console.log(isBalanced('(foo {bar (baz) [boo]})'));
console.log(isBalanced('foo {bar { baz }'));
console.log(isBalanced('foo {(bar [baz]})'));

//isBalanced('[ { you: "arent sure", i: "moveForward" }, { we: "love_this" } ]');