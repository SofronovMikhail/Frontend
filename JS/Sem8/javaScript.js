/*
Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
*/
class Employee {
    constructor(name){
        this.name = name;
    }
    displayInfo(){
        console.log(`Имя сотрудника ${this.name}`);
    }
}
class Manager extends Employee {
    constructor(name, department){
        super(name);
        this.department = department;
    }
    displayInfo(){
        console.log(`Имя сотрудника ${this.name} отдел ${this.department}`);
    }
}
const employee = new Employee("Михаил Софронов");
employee.displayInfo();
const manager = new Manager("Софронов Михаил", "Разработка");
manager.displayInfo();
/*
""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
*/
class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
        this.totalPrice = 0;
    }
    addProduct(product, quantity = 1) {
        this.totalPrice += product.price * quantity;
        this.products.push({product, quantity})
    }
    getTotalPrice(){
        return this.totalPrice;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

const product3 = new Product("Phone", 1000);
order.addProduct(product3, 3);

console.log(order.getTotalPrice()); // Вывод: 600
