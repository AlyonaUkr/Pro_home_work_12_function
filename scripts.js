// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const firstArrey = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
const numberArrey = firstArrey.filter(item => typeof item === 'number');

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(average(numberArrey));

// Вивести результат математичної дії, вказаної в змінній znak. 
// Обидва числа і знак виходять від користувача.

// const x = Number(prompt('Введіть x'));
// const y = Number(prompt('Введіть y'));
// const znak = prompt('Введіть знак (+, -, *, /, %, **)');

// function doMath(x, znak, y) {
//   switch (znak) {
//     case '+':
//       return x + y;
//     case '-':
//       return x - y;
//     case '*':
//       return x * y;
//     case '/':
//       return x / y;
//     case '%':
//       return x % y;
//     case '**':
//       return x ** y;
//     default:
//       alert('Sorry this operation do not exist');
//   } 
// }

// alert(doMath(x, znak, y));

// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

// const nLength = prompt('Введіть довжину основного масиву');
// const mLength = prompt('Введіть довжину внутрішнього масиву');
// const a = [nLength];

// function fillArray (n, m) {
//     for (i = 0; i < n; i++) {
//         a[i] = [m];
//         for (j = 0; j < m; j++) {
//           a[i][j] = prompt('Ввести значення внутрішніх масивів');
//         }
//       }
    
//     return a;
// }

// console.log(fillArray(nLength, mLength));

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач.

// const userString = prompt('Ввести будь-яку строку');
// const removeArray = prompt('Ввести, які символи видалити із строки');


// function deleteSymbols (string, array) {
//     let newArray = [];
    
//     for (let element of string) {
//         if (array.includes(element)) {
//         } else {
//             newArray.push(element);
//         }
//     }

//     return newArray
// }

// const readyArray = deleteSymbols(userString, removeArray);
// const result = readyArray.join('');
// console.log(result);


