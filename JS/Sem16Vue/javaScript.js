
Vue.component("selectuser", {

    data() {
        return {
            currentArticle: [
                {
                    nameTitle: "Кухня"
                },
            ],
            listOfArticles: [
                {
                    nameTitle: "Кухня",
                },
                {
                    nameTitle: "Спальня",
                },
                {
                    nameTitle: "Архитектура",
                },
                {
                    nameTitle: "Здание",
                },
                {
                    nameTitle: "Планировка",
                },
            ],
            buttonIsActive: 'kitchen',
            buttons: [
            { id: "Кухня", title: "Кухня" },
            { id: "Спальня", title: "Спальня" },
            { id: "Архитектура", title: "Архитектура" },
            { id: "Здание", title: "Здание" },
            { id: "Планировка", title: "Планировка" },
            ],
        }
    },

    methods: {
        selectTags() {
            let btns = document.querySelectorAll('.link_right_box')
            btns.forEach(function(btn) {
                btn.removeAttribute("style");
                btn.addEventListener('click', function(e) {
                    e.target.setAttribute('style', 'background-color: black; color: white;');
                })
            })
        },

        changeArticle(id) {
            const buttonId = id;
            this.listOfArticles.forEach((article) => {
                if (buttonId === article.nameTitle) {
                    this.currentArticle = [];
                    return this.currentArticle.push(article);
                }
            });
        },
    },

    template:
    `
    <div>
        <div class="section_box">
            <div id="" class="section_boxs section_left">
            <h2  v-for="item in currentArticle" class="section_left_title">{{ item.nameTitle }}</h2>
            <img src="../imgs/details_kitchen1.png" alt="#" class="img_section_left1">
            <div class="date">
                <div class="date_left">
                    <p class="date_content">26 Декабрь,2022 </p>
                </div>
                <div class="nav">
                    <a class="link date_link" href="#">Интерьер</a> 
                    <a class="link date_link" href="#">Домой</a>
                    <a class="link date_link" href="#">Декор</a>
                </div>
            </div>
            <p class="section_content">
                В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
                В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            </p>
            <img src="../imgs/details_letter.png" alt="#" class="img_section_left2">
            <h2 class="section_left_subtitle">Design sprints are great</h2>
            <p class="section_content2">
                В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            </p>
            <ol class="section_list">
                <li class="section_list_li">
                    С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
                <li class="section_list_li">
                    С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.
                </li>
                <li class="section_list_li">
                    С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.
                </li>
            </ol>
            <img src="../imgs/details_kitchen2.png" alt="#" class="img_section_left3">
            <p class="section_content3">
                В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            </p>
        
                <div v-for="item in listOfArticles" class="section_left">
                    <h2 class="section_left_title"> {{ item.nameTitle }}</h2>
                    <img src="../imgs/details_kitchen1.png" alt="#" class="img_section_left1">
                    <div class="date">
                        <div class="date_left">
                            <p class="date_content">26 Декабрь,2022 </p>
                        </div>
                        <div class="nav">
                            <a class="link date_link" href="#">Интерьер</a> 
                            <a class="link date_link" href="#">Домой</a>
                            <a class="link date_link" href="#">Декор</a>
                        </div>
                    </div>
                    <p class="section_content">
                        В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
                        В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
                    </p>
                    <img src="../imgs/details_letter.png" alt="#" class="img_section_left2">
                    <h2 class="section_left_subtitle">Design sprints are great</h2>
                    <p class="section_content2">
                        В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
                    </p>
                    <ol class="section_list">
                        <li class="section_list_li">
                            С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
                        <li class="section_list_li">
                            С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.
                        </li>
                        <li class="section_list_li">
                            С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.
                        </li>
                    </ol>
                    <img src="../imgs/details_kitchen2.png" alt="#" class="img_section_left3">
                    <p class="section_content3">
                        В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
                    </p>
                </div>
            </div>
            <div class="section_right">
                <h4 class="section_right_title">Тэги</h4>
                <div class="section_right_box">
                    <button v-for="button in buttons" :key="button.id"
                    @click="changeArticle(button.id), selectTags()" 
                    type="button"
                    :class="['link_right_box']">{{button.title}}</button>
                </div>
            </div>
        </div>
    </div>`
})

new Vue({
    el: "#app",
    data: {
        lists: [
            {
                src: "../imgs/artikle_news_img1.png",
                title: "Создадим лучший макет перепланировки",
                date: "26 Декабрь,2022",
                xmlns: "http://www.w3.org/2000/svg",
                content: "Дизайн кухни",
            },
            {
                src: "../imgs/artikle_news_img2.png",
                title: "Лучшие интерьерные идеи по низкой цене",
                date: "22 Декабрь,2022",
                xmlns: "http://www.w3.org/2000/svg",
                content: "Дизайн для жизни",
            },
            {
                src: "../imgs/artikle_news_img3.png",
                title: "Лучшие интерьерные решения для офисов",
                date: "25 Декабрь,2022",
                xmlns: "http://www.w3.org/2000/svg",
                content: "Дизайн Интерьера",
            },
            {
                src: "../imgs/artikle_news_img4.png",
                title: "Создадим лучший макет перепланировки",
                date: "26 Декабрь,2022",
                xmlns: "http://www.w3.org/2000/svg",
                content: "Дизайн кухни",
            },
            {
                src: "../imgs/artikle_news_img5.png",
                title: "Лучшие интерьерные идеи по низкой цене",
                date: "22 Декабрь,2022",
                xmlns: "http://www.w3.org/2000/svg",
                content: "Дизайн для жизни",
            },
            {
                src: "../imgs/artikle_news_img6.png",
                title: "Лучшие интерьерные решения для офисов",
                date: "25 Декабрь,2022",
                xmlns: "http://www.w3.org/2000/svg",
                content: "Дизайн Интерьера",
            },
        ],
        
    },
});