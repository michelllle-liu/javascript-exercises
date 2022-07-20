const sumAll = function(start, stop) {
    sum = 0;

    if ((!Number.isInteger(start)) || (!Number.isInteger(stop)))
        return 'ERROR'

    if ((start < 0) || (stop < 0))
        return 'ERROR'

    if (start > stop){
        let temp = start;
        start = stop;
        stop = temp;
    }

    for (let i = start; i <= stop; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
