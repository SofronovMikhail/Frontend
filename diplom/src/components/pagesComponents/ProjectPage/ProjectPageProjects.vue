<template>
  <div class="project__items">
    <div class="project__item" v-for="project in projects" :key="project.id">
      <img class="project__item-img" :src="require('@/assets/images/project_item/' + project.image)" alt="">
      <div class="project__item-wrap">
        <router-link to="#" class="project__item-wrap-text">
          <h2 class="project__item-title">{{ project.title }}</h2>
          <p class="project__item-text">{{ project.text }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {  },
  name: 'ProjectPageProjects',
  props: ['projects'],

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/vars";

.project__items {
  margin-top: 61px;
  margin-bottom: 61px;
  column-count: 1;
}

.project__item {
  position: relative;
  padding-bottom: 27px;
  display: inline-block;

  &-img{
    width: 100%;
  }
  
  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  &-title {
    color: $primaryColor;
    font-family: $familyTitle;
    font-size: 25px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 125%;
    letter-spacing: 0.5px;
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
</style>
