<template>
  <section class="baner center">
    <div class="baner__wrap">
      <img src="@/assets/images/home.png" alt="картинка">
    </div>
    <div class="baner__wrap-content">
        <h1 class="baner__title">ТСН "ЛАГУНА-Ф"</h1>
        <p class="baner__text">Товарищество собственников недвижимости.</p>
    </div>
    <div class="baner__wrap2">
      <img src="@/assets/images/home_tsn.jpg" alt="Фото ТСН">
    </div>
  
  </section>
</template>

<script>
export default {
  name: 'HomePageBaner'
}
</script>

<style lang="scss" scoped>
@import "@/scss/vars";

.baner {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &__wrap2 {
    width: 100%
  }
  &__title {
    margin-bottom: 18px;
    color: $primaryColor;
    font-family: $familyTitle;
    font-size: 65px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 125%;
  }

  &__text {
    color: $secondColor;
    font-family: $familyText;
    font-size: 22px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 21px;
    text-align: center;
  }  
}

@media (max-width: 1199px) {
  .baner {
    &__wrap-content {
      padding: 208px 500px 0 52px;
    }
  }
}

@media (max-width: 1023px) {

  .baner {
    &__wrap-content {
      padding: 208px 270px 0 52px;
    }
  }
}

@media (max-width: 767px) {
  .baner {
    &__wrap {
      height: 360px;
    }

    &__wrap-content {
      padding: 40px 50px;
    }

    &__title {
      font-size: 32px;
    }

    &__text {
      font-size: 18px;
    }
  }
}

@media (max-width: 359px) {
  .baner {
    &__wrap {
      height: 340px;
    }

    &__wrap-content {
      padding: 40px 35px;
    }

    &__button-text {
      width: 200px;
      padding: 16px 0;

      & p {
        font-size: 16px;
      }
    }
  }
}
</style>
