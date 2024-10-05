const add = require('./add');

exports.add = add

module.exports.substract = (a, b) => {
    return a - b;
}

// module.exports = {
//     add,
//     substract,
// }