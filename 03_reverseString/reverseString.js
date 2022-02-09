const reverseString = function(string) {
    let stack = string.split("");
    let i = 0;
    let reversed = "";

    while (i < stack.length)
        reversed += stack.pop();
    
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
