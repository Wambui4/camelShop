<script>
   
  export default{
    data() {
     return {
          image:'../images/biscuits.jpg',
           url:'https://www.vuejs.org/',
          stockDetails: [
            {
              itemNumber:1,
              itemName:"sweets",
              itemPrice:5,
              itemQuantity:30,
              itemImage:'../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
            },


            {itemNumber:1364,
              itemName:"lollipops",
              itemPrice:10,
              itemQuantity:4,
              itemImage:'../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
            }

          ],
       }
    },

  methods(){

  },

computed(){

  }

}
</script>

<template>
 <v-card class="mx-auto"
    width="1000"
> 
  <v-carousel>
    <v-carousel-item
    src="../images/candy shop.jpg"
    cover
    ></v-carousel-item>

  <v-carousel-item
    src="../images/candy shopp.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../images/candyshop.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>

  <v-card align="center">
        <v-card-item>
          <v-card-title>Camel Candy Shop</v-card-title>

          <v-card-subtitle>Sweets that make you sweet!</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Camel candy shop helps you make your day better with a hint of sweetness 
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customer say</h3>
      <v-divider></v-divider>

      <v-row>

    <v-col cols="12" md="4">
      <v-card
        text="Quality products that are very affordable and long-lasting.Love it!"
        subtitle="Loise Wambui"
        title="Great customer service"
      ></v-card>
         
      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          fast delivery
        </template>

        <template v-slot:subtitle>
          Thomas K.
        </template>

        <template v-slot:text>
          My goods took minutes to reach home!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Quality products</v-card-title>

          <v-card-subtitle>Lashami lenny</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          good customere service
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>





    </template>

