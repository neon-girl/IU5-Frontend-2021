/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let array = str.split(/[^-\d\.]/);
    let minI = +array[0];
    let maxI = minI;
    for (let i = 0; i < array.length; i++) {
        let e = +array[i];
        if (e < minI) minI = e;
        if (e > maxI) maxI = e;
    }
    return { min: minI, max: maxI };

}

module.exports = getMinMax;