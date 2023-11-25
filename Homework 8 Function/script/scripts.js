// Задача 1
// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function less(a, b) {
    if (a<b) {
        return a;
    }
    else {
        return b;
    }
}
let resultat = less(8, 40)
console.log(resultat)

// Задача 2
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function even_one(a, b) {
  let max_val = Math.max(a, b);
  let min_val = Math.min(a, b);
  for (let i = max_val; i >= min_val; i--) {
    if (i %2 === 0) {
    console.log(i)
    }
  }
}
even_one(8, 10);

// Задача 3
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(a, b = 2){
    
    return a**b
}
console.log(power(3))

// Задача 4
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function sumEtw(n) {
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum += i;
    } return sum;
}
console.log(sumEtw(15))

// Задача 4
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumOddEven(n, m) {
    let sumEven = 0;
    let sumOdd = 0; 
    for (let i = n; i <= m; i++) {
      if (i %2 === 0){
        sumEven +=i;
      }
      else {
        sumOdd +=i;
      }
        
    }
    console.log(sumEven);
    console.log(sumOdd);
}

// Задача 5
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
function longestElem(arr) {
    if (arr.length === 0) {
        return null;
    }

    let lElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > lElement.length) {
            lElement = arr[i];
        }
    }

    return lElement;
}
