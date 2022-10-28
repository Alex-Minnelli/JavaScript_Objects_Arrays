console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function arraySum(numbers = [2, 22, 12, 17, 18, 39, 129]){
    let sum = 0;
    numbers.forEach(element => sum += element);
    return sum;
}




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: '',
    author: '',
    pages: 0,
    readCount: 0
};

book.title = 'Lord of the Rings';
book.author = 'J.R.R Tolkein';
book.pages = 800;
book.readCount = 1;

book.info = function() {
    console.log(`${book.title} by ${book.author}, ${book.pages} pages, read ${book.readCount} times`);
}

console.log(book.info());




// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(' ');
let ans = '';

words.forEach(element => ans += ((element.split('').reverse().join('')) + ' '));
console.log(ans);

/*let words2 = [];

for (let i = 0; i < words.length; i++){
    words2[i] = words[i].split('').reverse();
    ans += (words2[i] + ' ');
}

console.log(ans.replaceAll(',', ''));*/



// Exercise 4 Section
/*console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let result = [];
let rows = csvData.split('\n');
rows[0] = rows[0].split(',');

for (let i = 1; i < rows.length; i++){
    rows[i] = rows[i].split(',');
    let temp = `${rows[0][0]}: ${rows[i][0]} ${rows[0][1]}: ${rows[i][1]}`;
    result[i] = [];
    result[i][0] = temp.slice(0, temp.lastIndexOf('a')-1);
    result[i][1] = temp.slice(temp.lastIndexOf('a'));
}

console.log(result);*/

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataSplit = csvData.split('\n');

const header = dataSplit[0].split(',');
const result = [];

for (let i = 1; i < dataSplit.length; i++){
    const values = dataSplit[i].split(',');
    let obj = {};
    obj[header[0]] = values[0];
    obj[header[1]] = values[1];
    result.push(obj);
}

console.log(result);