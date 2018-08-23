var isPalindrome = function(subject){
    var cleanString = subject.toLowerCase().replace(/\s/g, '').split('');
    
    if(cleanString.length == 0) return true;
    if(cleanString.length % 2 == 0) return false;

    while (cleanString.length > 1) {
        if (cleanString.shift() != cleanString.pop())
            return false;
    }

    return true;
};

console.log(isPalindrome(''));
console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('abcd'));
console.log(isPalindrome('A man a plan a canal Panama'));