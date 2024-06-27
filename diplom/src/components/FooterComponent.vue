<template>
  <footer class="footer center">
    <div class="footer__menu">
      <p class="footer__menu-title">Навигация</p>
      <link-menu-component class="footer__link" textColor="#4D5053" />
    </div>
    <div class="footer__services"></div>
    <div class="footer__contact">
      <p class="footer__contact-title">Контакты</p>
      <p class="footer__contact-text">Нижегородская обл., г.Нижний Новгород, Александровская слобода 603087</p>
      <p class="footer__contact-text-email">tsn_laguna-f@yandex.ru</p>
      <p class="footer__contact-text">8(952)-783-77-52</p>
    </div>
  </footer>
</template>

<script>
import LinkMenuComponent from './LinkMenuComponent.vue'
export default {
  components: { LinkMenuComponent },
  name: 'FooterComponent',

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
@import "../scss/vars";

.icon__link:hover {
  path {
    opacity: 0.5;
    transition: $transitionLinc;
  }

}

.footer {
  // margin-top: 96px;
  padding-bottom: 134px;
  display: flex;
  justify-content: space-between;

  &__link {
    font-size: 22px;
    letter-spacing: 0.22px;
    line-height: 300%;
  }

  &__logo {
    width: 393px;

    &-text {
      margin-top: 18px;
      margin-bottom: 31px;
      color: $secondColor;
      font-family: $familyText;
      font-size: 22px;
      font-style: normal;
      font-weight: $font-400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }

    &-icon {
      display: flex;
      align-items: center;
      gap: 54px;
    }
  }

  &__menu {
    width: 125px;

    & div {
      display: flex;
      flex-direction: column;
    }

    &-title {
      margin-bottom: 9px;
      color: $primaryColor;
      font-family: $familyTitle;
      font-size: 25px;
      font-style: normal;
      font-weight: $font-400;
      line-height: 125%;
    }
  }

  &__services {
    width: 120px;
  }

  &__contact {
    width: 258px;

    &-title {
      margin-bottom: 26px;
      color: $primaryColor;
      font-family: $familyTitle;
      font-size: 25px;
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

      &-email {
        color: $secondColor;
        font-family: $familyText;
        font-size: 22px;
        font-style: normal;
        font-weight: $font-400;
        letter-spacing: 0.22px;
        line-height: 300%;
      }
    }
  }
}
</style>
