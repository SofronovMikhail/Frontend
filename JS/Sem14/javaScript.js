/*
Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
*/

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const boxContent = document.querySelector(".boxContent");
const boxNav = document.querySelector(".boxNav")
const arrContent = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];
const img = document.createElement("img");
boxContent.append(img);
img.src = arrContent[0];
nextBtn.addEventListener("click", ()=>{
  for(let i = 0; i < arrContent.length; i++){
     if(img.src.includes(arrContent[arrContent.length-1])){
      img.src = arrContent[0];
      return
    };
    if(img.src.includes(arrContent[i])) {
       img.src = arrContent[i+1];
       return
    };
  }
});
previousBtn.addEventListener("click", ()=>{
  for(let i = 0; i < arrContent.length; i++){
     if(img.src.includes(arrContent[0])){
      img.src = arrContent[arrContent.length-1];
      return
    };
    if(img.src.includes(arrContent[i])) {
       img.src = arrContent[i-1];
       return
    };
  }
});

boxNav.addEventListener("click", ({target}) =>{
  img.src = arrContent[target.className - 1];
})

