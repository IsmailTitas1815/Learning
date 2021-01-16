// var obj = {}
// var obj1 = new Object;

// console.log(typeof obj);
// console.log(typeof obj1);

var book = {
    name: 'javascript',
    price: '2200',
    author: 'jani na',
    type: "programming book",
    print: function()
    {
        console.log("ok "+this.name,this.price);
    }
};

console.log(book);

book.owner= 'titas';
book['noOne'] = 'something'

console.log(book);


for (i in book){
    console.log(book[i]);
}

