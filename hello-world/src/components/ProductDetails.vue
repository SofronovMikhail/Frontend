<template>
  <div class="products">
    <div class="product" v-for="item in product" :key="item.id">
      <h3>{{ item.id }}.{{ item.name }}</h3>
      <p>{{ formattedPrice(item) }}</p>
      <p v-if="item.available">Available</p>
      <p v-else>Out of stock</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'ProductDetails',
  data() {
    return {
      product: [
        {
          id: 1,
          name: "Product-1",
          price: 20,
          available: true,
        },
        {
          id: 2,
          name: "Product-2",
          price: 70,
          available: false,
        },
        {
          id: 3,
          name: "Product-3",
          price: 40,
          available: true,
        },
      ]
    }
  },
  methods: {},
  computed: {
    formattedPrice(){
      return Vue.set(this.product,"price", 24)
      
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
