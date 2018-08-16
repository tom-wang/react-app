exports.moduleA = {
    get() {
        console.log('get in moduleA');
    }
}

exports.fnA = function() {
    console.log('fnA in moduleA');
}
