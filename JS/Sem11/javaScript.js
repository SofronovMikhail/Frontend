/*
Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
*/
class ArrayBook{
    #books = [];
    constructor(name1, name2, name3){
        this.#books.push(name1, name2, name3);
    };
    allBook(){
        this.#books.forEach((element) => console.log(element));
    };
    addBook(title){
        const hasNameBook = this.#books.includes(title);
        if (hasNameBook === true) {
            throw new Error("Book is has");
        } 
        this.#books.push(title);
    };
    hasBook(title){
        console.log(this.#books.includes(title)); 
    }
    removeBook(title){
        const hasNameBook = this.#books.includes(title);
        if (hasNameBook === true){
           this.#books = this.#books.filter((el) => el !== title);
        }  
        else{
            throw new Error("Book is not has");
        }  
    }
}
const arrayBook = new ArrayBook("Война и Мир", "Обломов", "Гранатовый браслет")
arrayBook.allBook();
arrayBook.addBook("На дне");
arrayBook.removeBook("Обломов");
arrayBook.hasBook("Гранатовый браслет");
arrayBook.allBook();
/*
Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
*/
let arr = [];
let button = document.querySelector('.button');
let displayText = document.querySelector('.comment')

button.onclick = function(){
  const text = document.querySelector('.textarea_review').value;
  if(text.length < 50 || text.length > 500) {
    document.querySelector('.textarea_review').value = " ";
    throw new Error("Отзыв не принят");
  }
  arr.push(document.querySelector('.textarea_review').value);
  const paragraf = document.createElement("p"); 
  paragraf.innerText = document.querySelector('.textarea_review').value;;
  displayText.appendChild(paragraf);
  document.querySelector('.textarea_review').value = " ";
}  