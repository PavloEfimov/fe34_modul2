// дополнительное задание 7

/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100. 
  
  Если посетитель ввёл другое число – 
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо 
  посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
*/
let num;
do{
num = prompt('введите число', '');
if(+num<=100) {
    alert('еще раз')
} else {
    console.log(num)
}
} while(+num<=100&&num!==null)