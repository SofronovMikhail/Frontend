<template>
  <div>
    <router-link class="menu__link" :style="{ color: textColor }" to="/">Главная</router-link>
    <router-link class="menu__link" :style="{ color: textColor }" to="/project">Фото</router-link>
    <router-link class="menu__link" :style="{ color: textColor }" to="/blog">Новости</router-link>
    <router-link class="menu__link" :style="{ color: textColor }" to="/AboutUs">О Нас</router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkMenuComponent',
  props: ['textColor']
}
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.menu__link {
  font-family: $familyText;
  font-style: normal;
  font-weight: $font-400;

  &:hover {
    text-decoration-line: underline;
  }
}
</style>
