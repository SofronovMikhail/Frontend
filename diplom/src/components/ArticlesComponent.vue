<template>
  <article>
    <div class="blog__items">
      <router-link to="#" v-for="article in articlesPage" class="blog__item" :key="article.id">
        <h2 class="blog__item-title">{{ article.date }}</h2>
        <div class="blog__wrap-text">
          <p class="blog__item-text">{{ article.p }}</p>
        </div>
      </router-link>
    </div>
    <div v-show="showBlok" class="count__page">
      <div class="count__page-wrap">
        <router-link class="count__page-number" v-for="page in totalPages" :key="`p${page}`" :to="`/blog/${page}`">
          <p class="count__page-number-text">{{ page }}</p>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script>
const { articles } = require('@/assets/scripts/data.js')
export default {
  name: 'ArticlesComponent',

  props: ['quantity', 'visible'],
  data () {
    return {
      articles: articles
    }
  },
  mounted () {

  },
  methods: {

  },
  computed: {
    showBlok () {
      return this.visible
    },
    totalPages () {
      return Math.ceil(this.articles.length / this.quantity)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    articlesPage () {
      const pageNumber = this.currentPage
      const startIndex = (pageNumber - 1) * this.quantity
      const endIndex = startIndex + this.quantity
      return this.articles.slice(startIndex, endIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.blog {
  margin-top: 96px;
  margin-bottom: 96px;

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 382px);
    gap: 27px;
  }

  &__item {
    border: 1px solid #e7e7e7;
    border-radius: 62px;
    padding: 21px;

    &:hover {
      background-color: #F4F0EC;
      transition: $transitionLinc;

      & circle {
        fill: #fff;
        transition: $transitionLinc;
      }
    }

    &-select {
      background: #f4f0ec;
    }
  }

  &__item-image {
    position: relative;

    & img {
      border-top-left-radius: 45px;
      border-top-right-radius: 45px;
      margin-bottom: 21px;
    }

    & p {
      position: absolute;
      top: 228px;
      left: 20px;
      border-radius: 8px 8px 8px 0px;
      background: #fff;
      padding: 4px 10px 8px 11px;
      color: $secondColor;
      font-family: $familyText;
      font-size: 16px;
      font-style: normal;
      font-weight: $font-400;
      line-height: 150%;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }

  &__item-title {
    margin-bottom: 30px;
    color: $primaryColor;
    font-family: $familyTitle;
    font-size: 25px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }

  &__wrap-text {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__item-text {
    color: $secondColor;
    font-family: $familyText;
    font-size: 16px;
    font-style: normal;
    font-weight: $font-400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}

.count__page {
  margin-top: 51px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;

  &-wrap {
    display: flex;
    gap: 20px;
  }

  &-number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;

    &-text {
      color: $primaryColor;
      font-family: $familyText;
      font-size: 16px;
      font-style: normal;
      font-weight: $font-500;
      line-height: 150%;
      text-transform: capitalize;
    }

    &:hover {
      background: #f4f0ec;
      border: none;
      width: 54px;
      height: 54px;
    }
  }

  &-svg:hover {
    fill: #f4f0ec;

    & circle {
      stroke: none;
    }
  }
}
@media (max-width: 767px) {
.blog {
  margin-top: 96px;
  margin-bottom: 96px;

  &__items {
    display: grid;
    grid-template-columns: repeat(1, 382px);
    gap: 27px;
  }
}
}
</style>
