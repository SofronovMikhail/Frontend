<template>
  <section class="blog center">
    <div class="descriptions">
      <p class="descriptions__TCN text">ТСН-Товарищество собственников недвижимости (ТСН) — организационно-правовая форма некоммерческих организаций. Согласно части первой Гражданского кодекса РФ это «добровольное объединение собственников недвижимого имущества (помещений в здании, в том числе в многоквартирном доме, или в нескольких зданиях, жилых домов, дачных домов, садоводческих, огороднических или дачных земельных участков и т. п.), созданное ими для совместного владения, пользования и в установленных законом пределах распоряжения имуществом (вещами), в силу закона находящимся в их общей собственности или в общем пользовании, а также для достижения иных целей, предусмотренных законами» (п. 1 ст. 123.12).</p>
      <p class="descriptions__date text">ТСН Лагуна-Ф была организована 25.06.1996 года. </p>
    </div>
    <div class="president">
      <p class="president__data text">Руководителем организации (лицом, имеющим право без доверенности действовать от имени юридического лица) с 6 декабря 2013 г. является председатель правления Горбунова Любовь Федоровна </p>
      <p class="president__reception text1">
        Прием жителей: понедельник-пятница: с 7-00 до 15-00;
      </p>
    </div>
    <div class="contacts">
      <p class="telephone text1">Телефон: 8(952)-783-77-52</p>
      <p class="adress text1">Адрес: Нижегородская обл., г.Нижний Новгород, Александровская слобода</p>
      <p class="index text1">Индекс: 603087</p>
      <p class="mail text1">Электроннная почта: tsn_laguna-f@yandex.ru</p>
    </div>
    
    
  </section>
</template>

<script>

export default {
  name: 'HomePageArticles',
  components: {
    
  },

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/vars";

.blog {
  margin-top: 96px;
  margin-bottom: 96px;
}  
.text{
  padding-left: calc(($widthSite - 811px) / 2);
    padding-right: calc(($widthSite - 811px) / 2);
    margin-bottom: 52px;
    color: $secondColor;
    font-family: $familyText;
    font-size: 22px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
.text1{
  padding-left: calc(($widthSite - 811px) / 2);
    padding-right: calc(($widthSite - 811px) / 2);
    margin-bottom: 10px;
    color: $secondColor;
    font-family: $familyText;
    font-size: 22px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>
