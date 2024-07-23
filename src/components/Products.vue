<template>
    <h1 style="text-align: center; font-size: 30px; padding-top: 3%;">Confectionery</h1>
    <p>{{ total }}</p>

  <div>
    <v-row>
      <v-col cols="12" md="4"  v-for="product in stock" :key=product>
    
        <v-card
        class="mx-auto my-12"
    max-width="374">

      <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.ItemName }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{product.itemPrice}}
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

     <v-card-actions>
        <v-btn
        color="deep-purple-lighten-2"
        text="Add to cart"
        block
        border
        @click="addToCart(product)"
      ></v-btn>
       </v-card-actions>
       </v-card>
       </v-col>
       </v-row>
</div>
</template>
 <script>
import{mapActions,mapGetters} from 'vuex'

   export default{
          data(){
              return{
                 products:[1,2,3,4,5,6,7,8,9,10],
                 stockDetails : [
            {
              itemNumber: 1,
              itemName :"Jelly beans",
              itemPrice : 20,
              itemQuantity : 30,
              itemImage: '../images/jelly beans.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 2,
              itemName : "Mackaroon",
              itemPrice : 100,
              itemQuantity : 4,
              itemImage: '../images/mockaroon.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 3,
              itemName : "Lollipops",
              itemPrice : 10,
              itemQuantity : 4,
              itemImage: '../images/lollipops.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 4,
              itemName : "Chocolate bars",
              itemPrice : 120,
              itemQuantity : 10,
              itemImage: '../images/chocolate bars.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 5,
              itemName : "Ice cream",
              itemPrice : 50,
              itemQuantity : 15,
              itemImage: '../images/ice cream.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 6,
              itemName : "Gummy worms",
              itemPrice : 150,
              itemQuantity : 165,
              itemImage: '../images/gummy worms.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 7,
              itemName : "Donuts",
              itemPrice : 50,
              itemQuantity : 100,
              itemImage: '../images/donouts.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 8,
              itemName : "Chocolate",
              itemPrice : 250,
              itemQuantity : 80,
              itemImage: '../images/chocolate.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 9,
              itemName : "Oreo",
              itemPrice : 30,
              itemQuantity : 170,
              itemImage: '../images/oreo.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 10,
              itemName : "Soda",
              itemPrice : 90,
              itemQuantity : 100,
              itemImage: '../images/soda.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 11,
              itemName : "Juice",
              itemPrice : 70,
              itemQuantity : 90,
              itemImage: '../images/juice.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

            {
              itemNumber: 12,
              itemName : "Biscuits",
              itemPrice : 50,
              itemQuantity : 100,
              itemImage: '../images/biscuits.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },

         
           ],
           total:0,
           cartItems:[],
      
          };
                
              },


        methods:{
          calculateTotal(itemPrice){
            this.total += itemPrice
          },
           addToCart(product){
             this.cartItems.push(product)
             this.calculateTotal(product.itemPrice)
          },
           removeFromCart(product){
             this.cartItems.pop(product)
             this.total -=product.itemPrice
          }



        },
        computed:{
        ...mapGetters({
          stock: 'stock'

        })

        },

       }
</script>