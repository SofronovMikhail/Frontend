<template>
  <div class="products">
    <div class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ formattedPrice }}</p>
      <p v-if="product.available">Available</p>
      <p v-else>Out of stock</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: 
        {
          name: "Product",
          price: 20,
          available: true,
        },
    }
  },
  methods: {},
  computed: {
    formattedPrice: function(){
      return `$${this.product.price}`
      
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
