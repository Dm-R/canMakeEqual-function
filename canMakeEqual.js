function canMakeEqual(str1, str2) {
    //Для начала проверим равны ли строки по длине, если да, то приступим к проверке строк, иначе вернем FALSE 
    if (str1.length == str2.length) {
        //Создаем массив, в который с помощью функции запишем четные символы первой строки
        var str1Even = new Array();
        chooseEven(str1Even, str1);
        //Создаем массив, в который с помощью функции запишем нечетные символы первой строки
        var str1Odd = new Array();
        chooseOdd(str1Odd, str1);
        //Создаем массив, в который с помощью функции запишем четные символы второй строки
        var str2Even = new Array();
        chooseEven(str2Even, str2);
        //Создаем массив, в который с помощью функции запишем нечетные символы второй строки
        var str2Odd = new Array();
        chooseOdd(str2Odd, str2);
        //Функции выборки четных/нечетных символов строк
        function chooseEven(stringEven, string) {
            for (var i = 0; i < string.length; i += 2) {
                stringEven.push(string[i]);
            }//Сортируем массивы для сравнения
            stringEven.sort();
        }
        function chooseOdd(stringOdd, string) {
            for (var i = 1; i < string.length; i += 2) {
                stringOdd.push(string[i]);
            }
            stringOdd.sort();
        }
        //Проверяем возможно ли сделать две строки одинаковыми
        if (String(str1Even) == String(str2Even) && String(str1Odd) == String(str2Odd)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}