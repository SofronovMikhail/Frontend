<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <AboutUsBaner></AboutUsBaner>
    <AboutUsArticles></AboutUsArticles>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import AboutUsBaner from '../components/pagesComponents/AboutUs/AboutUsBaner.vue'
import AboutUsArticles from '../components/pagesComponents/AboutUs/AboutUsArticles.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'HomePage',

  components: {
    HeaderComponent,
    AboutUsBaner,
    AboutUsArticles,
    FooterComponent
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
</style>
