<template>
  <section class="project center">
    <ProjectPageCategories @activCategories="activCategories" />
    <ProjectPageProjects :projects="projectPage" />
    <div class="project__count-page">
      <div class="project__count-page-wrap">
        <router-link class="project__count-page-number" v-for="page in totalPages" :key="`p${page}`"
          :to="`#`">
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectPageCategories from './ProjectPageCategories.vue'
import ProjectPageProjects from './ProjectPageProjects.vue'
export default {
  components: {
    ProjectPageCategories,
    ProjectPageProjects
  },
  name: 'ProjectPageContent',

  data () {
    return {
      quantity: 8,
      projects: [],

      projectsOne: [
        {
          id: 1,
          image: 'New_Year1.jpg',
          title: 'Новогодние праздники',
          text: 'Новогодние праздники'
        },
        {
          id: 2,
          image: 'New_Year2.jpeg',
          title: 'Новогодние праздники',
          text: 'Новогодние праздники'
        },
        {
          id: 3,
          image: 'New_Year3.jpg',
          title: 'Новогодние праздники',
          text: 'Новогодние праздники'
        }
      ],

      projectsNew: [
        {
          id: 4,
          image: 'Maslenitsa2.jpg',
          title: 'Масленица',
          text: 'Веселые гулянье на щирокой масленице с корнкурсами, развлекательной программой и угощеньями'
        },
        {
          id: 5,
          image: 'Maslenitsa3.jpg',
          title: 'Масленица',
          text: 'Веселые гулянье на щирокой масленице с корнкурсами, развлекательной программой и угощеньями'
        },
        {
          id: 6,
          image: 'Maslenitsa4.jpg',
          title: 'Масленица',
          text: 'Веселые гулянье на щирокой масленице с корнкурсами, развлекательной программой и угощеньями'
        },
        {
          id: 7,
          image: 'Maslenitsa5.jpg',
          title: 'Масленица',
          text: 'Веселые гулянье на щирокой масленице с корнкурсами, развлекательной программой и угощеньями'
        },
        {
          id: 8,
          image: 'Maslenitsa6.jpg',
          title: 'Масленица',
          text: 'Веселые гулянье на щирокой масленице с корнкурсами, развлекательной программой и угощеньями'
        }
      ],

      projectsTwo: [
        {
          id: 9,
          image: 'Victory_day1.jpg',
          title: 'День победы',
          text: 'День победы, вместе с бесмертным полком'
        },
        {
          id: 10,
          image: 'Victory_day2.jpg',
          title: 'День победы',
          text: 'День победы, вместе с бесмертным полком'
        },
        {
          id: 11,
          image: 'Victory_day3.jpg',
          title: 'День победы',
          text: 'День победы, вместе с бесмертным полком'
        },
        {
          id: 12,
          image: 'Victory_day4.jpg',
          title: 'День победы',
          text: 'День победы, вместе с бесмертным полком'
        },
        {
          id: 13,
          image: 'Victory_day5.jpg',
          title: 'День победы',
          text: 'День победы, вместе с бесмертным полком'
        }
      ],

      projectsThree: [
        {
          id: 14,
          image: 'Russia_day1.jpg',
          title: 'День России',
          text: 'День России'
        },
        {
          id: 15,
          image: 'Russia_day2.jpg',
          title: 'День России',
          text: 'День России'
        },
        {
          id: 16,
          image: 'Russia_day3.jpg',
          title: 'День России',
          text: 'День России'
        }
      ]
    }
  },

  created () {
    this.projects = this.projectsNew
  },

  methods: {
    activCategories (data) {
      switch (data.id) {
        case 1:
          this.projects = this.projectsOne
          break
        case 2:
          this.projects = this.projectsNew
          break
        case 3:
          this.projects = this.projectsTwo
          break
        case 4:
          this.projects = this.projectsThree
          break
      }
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.projects.length / this.quantity)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    projectPage () {
      const pageNumber = this.currentPage
      const startIndex = (pageNumber - 1) * this.quantity
      const endIndex = startIndex + this.quantity
      return this.projects.slice(startIndex, endIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/vars";

.project {
  &__count-page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;

    &-wrap {
      display: flex;
      gap: 20px;
    }

    &-number-text {
      color: $primaryColor;
      font-family: $familyText;
      font-size: 16px;
      font-style: normal;
      font-weight: $font-500;
      line-height: 150%;
      text-transform: capitalize;
    } 
  } 
}
</style>
