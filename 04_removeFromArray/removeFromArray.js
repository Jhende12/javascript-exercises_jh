const removeFromArray = function(list, item) {
   
    const litmus = function(check) {
        return check != item
    }
    return list.filter(litmus)

};

// Do not edit below this line
module.exports = removeFromArray;
