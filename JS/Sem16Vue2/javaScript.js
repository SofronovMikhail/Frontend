/*
Часть 2. Задание по Vue

1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.

2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".

3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)
*/

new Vue({
    el: "#app",
    data: {
        message: "Перевернуть",
        lists: [
            'Элемент 1',
            'Элемент 2',
         ],
    },
    methods: {
        revers() {
            this.message = this.message.split("").reverse().join("");
        },
        addList: function () {
            this.lists.push("Новый элемент списка");
         },
         remove: function (i) {
            this.lists.splice(i, 1);
         },
    },
});