/*Задание 1: ""Управление библиотекой книг""
Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).*/
class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    displaiInfo(){
        console.log(`Книга с названием ${this.title}, автор написаший книгу ${this.author}, количетво страниц ${this.pages}.`);
    }
}
const book = new Book("War And Peace", "Tolstoy Lev Nikolaevich", 1500);
book.displaiInfo();
/*Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript*/
class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    };
    displaiInfo(){
        console.log("Вывод:");
        console.log(`Name ${this.name}`);
        console.log(`Age ${this.age}`);
        console.log(`Grade: ${this.grade}th grade.`);
    }
}
const student = new Student("Mikhail", 19, "10");
student.displaiInfo();
