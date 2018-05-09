/*
  Написать скрипт, который проверяет произвольную строку 
  и находит самое длинное слово в строке. 
*/

const string = "May the force be with you";
let longestWord;
const arr = string.split(' ');
longestWord=arr[0];
for(let i=0; i<arr.length;i+=1){
    if(arr[i].length>longestWord.length){
        longestWord=arr[i]
    }
}

console.log(longestWord); // 'force'