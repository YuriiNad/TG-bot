function getValue(obj, key) {
    if(typeof obj !== 'object' && !obj.hasOwnProperty(key)){
        throw Error('Obj is empty, or there is no specific key');
    }

    return obj[key];
}

module.exports = {
    getValue,
}