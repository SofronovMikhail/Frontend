<template>
  <section class="banner center">
    <div class="banner__intro">
      <img src="@/assets/images/home.png" alt="картинка">
      <h1 class="banner__intro-title">Фото с наших мероприятий</h1>
      <p class="banner__intro-text">Домой / Фото</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectPageBaner',

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

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__intro {
    text-align: center;
    background: #fff;

    &-title {
      color: $primaryColor;
      font-family: $familyTitle;
      font-size: 50px;
      font-style: normal;
      font-weight: $font-400;
      line-height: 125%;
    }

    &-text {
      color: $secondColor;
      font-family: $familyText;
      font-size: 22px;
      font-style: normal;
      font-weight: $font-400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
}
</style>
