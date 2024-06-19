<script>
   
  export default{
    data() {
     return {
          image:'../image/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
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
 <h1>My Candy Shop</h1>
    <div class="center">
        <img v-bind:src="image" width="500" height="300">
    </div>
    <div class="center">
        <a :href="url">Vue JS Practice</a>
        <h3>Milk, white,dark</h3>
        <h5>A wide variety of fine snacks, sweets and chocolates perfect for all occassions</h5>
    </div>

    <div class="center">
        <ul>
            <li :key="item" v-for="item in stockDetails">
            <div>
             <img v-bind:src="item.itemImage" width="200" height="150">
            </div>

            <div>
              <span>{{ item.itemName }}</span> &nbsp; &nbsp;
              <span> <button style="background-color:blueviolet; color: white; border: blueviolet; ">+</button></span>
           </div>
            <br/>
             </li>
              </ul>
               </div>
    </template>

