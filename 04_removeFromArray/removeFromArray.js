const removeFromArray = function(array, element) {
    // array.splice(array.indexOf(element), 1);
    // return array;

    for (let i = 1; i < arguments.length; i++){
        index = array.indexOf(arguments[i]);
        
        if (index != -1)
            array.splice(index, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
