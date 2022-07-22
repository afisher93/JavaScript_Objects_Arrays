console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129]

function arraySum(arr){
 let sum = 0;
 arr.forEach((number) =>{
    sum += number;
 });
 
 return sum;
}
console.log(arraySum(numbers));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let favBook = {}
favBook.title = "The Things They Carried"
favBook.author = "Tim O'Brien"
favBook.pageCount =259 
favBook.readCount =1 


favBook.info = function () {
    return `${this.title} buy ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
};
console.log(favBook.info());
