# word-count

[![Build Status](https://travis-ci.org/hexlet-exercises/words-count.svg)](https://travis-ci.org/hexlet-exercises/words-count)

## Зачем?
Это комплексное задание которое прокачивает множество навыков. Часть из них будут получены во время разбора решений.
* Изучение JavaScript.
* Работа с git и github pullrequests.
* Разработка через тесты (TDD).
* Знакомство с конечными автоматами.
* Введение в функциональную парадигму.

## Задача
Реализовать функцию, которая принимает на вход строку и возвращает число слов в этой строке.
Слова разделены пробелами (и возможно не одним), а знаки пунктуации не учитываются.

    3 === wordsCount("one, two three")

Функцию можно реализовать используя три подхода (чем больше тем лучше, но не обязательно):
* процедурный
* ооп
* функциональный

## Ограничения
* Язык JavaScript.
* Нельзя использовать сторонние библиотеки.
* Допускается только посимвольный перебор строки.

## Оформление решения
* Создайте файл в папке `solutions` с именем `<github name>.js`.
* Скопируйте туда содержимое файла `solutions/mokevnin.js`.
* Реализуйте функции `imperative`, `oop`, `functional` (не все, а те которые сможете).
* Убедитесь что проходят тесты.
* Отправьте пулреквест. Пулреквест должен содержать только один коммит (используйте squash для слияния).

## Окружение
* make.
* nodejs v0.12.*.

## Проверка решения
* Установка: `make install`.
* Запуск тестов для всех решений: `make test`.
* Или для запуска только одного решения используйте `SOLUTION=<github name>.js make test`
