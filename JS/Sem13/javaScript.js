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
    id: Date.now(),
    name: "footbal",
    time: "morning",
    maxCount: 20,
    currentCount: 0,
  },
  {
    id: Date.now(),
    name: "bascketbal",
    time: "daytime",
    maxCount: 20,
    currentCount: 0,
  },
  {
    id: Date.now(),
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
olList.innerHTML = sections.map(createView).join("");

function createView(sections){
  return 
    `<li class="${sections.id}">
     <h3> ${sections.name}</h3>
     <p>${sections.time}</p>
     <p>${sections.maxCount}</p>
     <p>${sections.currentCount}</p>
     <buton class="subscribe">Записаться</button>
     <buton class="unsubscribe">Отписаться</button>
     </li>
    `
}