<template>
   <v-app>
     <v-content>
      <div class="Our story"></div>
       <h2>Our story</h2><br>
       
    <p style="font-style: italic;" >Once nestled in the heart of a bustling village, the candy shop emerged as a sweet haven born from a confectioner's passion for sugarcraft.
       It all began decades ago when an enterprising baker named Mr. Whipple discovered a knack for crafting delectable candies and sweets in his modest kitchen. 
       His creations quickly enchanted the townsfolk, drawing them in with the irresistible aroma of caramelizing sugar and the vibrant colors of hand-spun lollipops. 
       Word of mouth spread like wildfire, and soon, what started as a humble cottage industry bloomed into a beloved local institution. The Camel candy shop became a whimsical destination where children dreamt of sugary delights. 
       Today, while the village has grown into a bustling town, the candy shop continue to delight generations old and new.</p>

  
  
  
   </v-content>
  </v-app>
</template>







<script>
 export default{
    name: 'About Us',
   };
</script>

<style scoped>
  .v-container{
    padding-top: 50px;
  }

 .v-card{
    padding: 20px;
 }

.v-card-title{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}

.v-card-text p{
    font-size: 16px;
    line-height:1.6;
    margin:10px 0;
}
</style>