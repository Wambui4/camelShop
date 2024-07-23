<template>
    <v-app-bar :elevation="9" color="pink">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>



  <v-app-bar-title>Camel Shop </v-app-bar-title>
  <v-btn to="/">Home</v-btn>

  <v-btn to="/products">Products</v-btn>
  <v-btn to="/aboutus">About Us</v-btn>
  <v-btn to="/contactus">Contact Us</v-btn>
  <v-btn to="/cart">Cart</v-btn>
  <v-btn to="/services">Services Offered</v-btn>
  






</v-app-bar>
</template>