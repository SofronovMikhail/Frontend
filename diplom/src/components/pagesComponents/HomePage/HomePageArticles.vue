<template>
  <section class="blog center">
    <h2 class="blog__title">Последнии Новости</h2>
    <ArticlesComponent :quantity="3" :visible="false"></ArticlesComponent>
  </section>
</template>

<script>
import ArticlesComponent from '../../ArticlesComponent.vue'
export default {
  name: 'HomePageArticles',
  components: {
    ArticlesComponent
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

  &__title {
    margin-bottom: 12px;
    color: $primaryColor;
    text-align: center;
    font-family: $familyTitle;
    font-size: 50px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    padding-left: calc(($widthSite - 811px) / 2);
    padding-right: calc(($widthSite - 811px) / 2);
    margin-bottom: 52px;
    color: $secondColor;
    text-align: center;
    font-family: $familyText;
    font-size: 22px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>
