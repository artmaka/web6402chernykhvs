/**
 * Проверяет, является ли число целым, используя побитовые операторы.
 * @param {*} n
 */
function isInteger(n) {
    return (n | 0) === n;
}

/**
 * Возвращает массив четных чисел от 2 до 20 включительно.
 */
function even() {
    return Array.from({ length: 10 }, (_, i) => (i + 1) * 2);
}

/**
 * Считает сумму чисел до заданного числа, используя цикл.
 * @param {*} n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Считает сумму чисел до заданного числа, используя рекурсию.
 * @param {*} n
 */
function recSumTo(n) {
    return n === 1 ? 1 : n + recSumTo(n - 1);
}

/**
 * Считает факториал заданного числа.
 * @param {*} n
 */
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

/**
 * Определяет, является ли число степенью двойки.
 * @param {*} n
 */
function isBinary(n) {
    return (n > 0) && (n & (n - 1)) === 0;
}

/**
 * Находит N-е число Фибоначчи.
 * @param {*} n
 */
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

/**
 * Создает функцию для выполнения заданной операции.
 * Если функция операции не задана, возвращается начальное значение.
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return function(newValue) {
        if (operatorFn) {
            storedValue = operatorFn(storedValue, newValue);
        }
        return storedValue;
    };
}

/**
 * Создает генератор арифметической последовательности.
 * @param {number} start - начальное значение последовательности
 * @param {number} step  - шаг последовательности
 */
function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        const result = current;
        current += step;
        return result;
    };
}

/**
 * Сравнивает два значения на глубокое равенство.
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;

    if (typeof firstObject !== "object" || firstObject === null ||
        typeof secondObject !== "object" || secondObject === null) {
        return false;
    }

    const keysFirst = Object.keys(firstObject);
    const keysSecond = Object.keys(secondObject);

    if (keysFirst.length !== keysSecond.length) return false;

    for (const key of keysFirst) {
        if (!deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
