/*
• Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
• Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
• Отобразите информацию о фотографе под изображением.
• Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

* Дополнительные задачи (по желанию):

• Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
• Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.
*/
const accessKey = "wyEX2LwNZYIisaNbNbJzCU97LJIUNgz0dpBib3MDd7w";

window.addEventListener('load', () => {
    Photo();
});

async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка:', error);
        return {};
    }
}


async function Photo() {
    const photo = await getRandomPhoto();
    if (photo) {
        const imageBox = document.querySelector('.image_box');
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        imageBox.appendChild(img);

        const imagePhotographerNameDiv = document.querySelector('.image_photographer-name');
        imagePhotographerNameDiv.textContent = `${photo.user.name}`;

        const imageLikesCounterSpan = document.querySelector('.counter');
        imageLikesCounterSpan.textContent = `${photo.likes}`;

    }
}

const counterButton = document.querySelector('.image_likes-button');
counterButton.addEventListener('click', function () {
    increaseCounter();
});

function increaseCounter() {
    const likesCounter = document.querySelector('.counter');
    const currentCounter = parseInt(likesCounter.textContent, 10);
    likesCounter.textContent = currentCounter + 1;
}


