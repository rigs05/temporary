// module.exports.items = ['item1', 'item2'];      // Type 1 : Export-as-you-go
const items = ['item1', 'item2'];

function condition (num) { 
    if (num < 12) {
        console.log ("smaller than 12");
    } else {
        console.log ("bigger than 12");
    }
}

module.exports.condition;

// console.log (module.exports.items)
module.exports = { items, condition };              // Type 2 : Exporting as a single object
