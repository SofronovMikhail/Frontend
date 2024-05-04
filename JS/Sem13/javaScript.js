/*
Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

7. При разработке используйте Bootstrap для стилизации элементов.
*/

const section = JSON.stringify([
  {
    id: 0,
    name: "footbal",
    time: "morning",
    maxCount: 20,
    currentCount: 0,
  },
  {
    id: 1,
    name: "bascketbal",
    time: "daytime",
    maxCount: 20,
    currentCount: 0,
  },
  {
    id: 2,
    name: "volleybal",
    time: "evening",
    maxCount: 20,
    currentCount: 0,
  },
]);
const keySection = "section";

if(!localStorage.getItem(keySection)){
  localStorage.setItem(keySection, section)
}
const sections = JSON.parse(localStorage.getItem(keySection));
const olList = document.querySelector(".listSection");

function createView(sections){
  return `<li class="${sections.id}">
     <h3 class="name"> ${sections.name}</h3>
     <p class="time"> time: ${sections.time}</p>
     <p class="maxCount"> maxCount: ${sections.maxCount}</p>
     <p class="currentCount"> currentCount: ${sections.currentCount}</p>
     <button class="subscribe">Записаться</button>
     <button class="unsubscribe">Отписаться</button>
     </li>`;
}
olList.innerHTML = sections.map(createView).join("");
const subscribeButton = document.querySelector(".subscribe");

olList.addEventListener("click", event => {
    const button = event.target;
    const buttonParent = button.parentNode;
    if(button.classList.contains("subscribe")){
      sections.forEach(function(el){
        if(buttonParent.classList.contains(el.id) && el.currentCount < el.maxCount) {
          el.currentCount += 1;
        };
      });
    };
    if(button.classList.contains("unsubscribe")){
      sections.forEach(function(el){
        if(buttonParent.classList.contains(el.id) && el.currentCount > 0) {
          el.currentCount -= 1;
        };
      });
    }
    localStorage.setItem(keySection, JSON.stringify(sections));
    olList.innerHTML = sections.map(createView).join("");
});